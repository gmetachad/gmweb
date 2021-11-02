import { useEffect, useState } from "react";
import styled from "styled-components";
import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import NavbarCustom from "./NavbarCustom";
import ImageDisplay from "./ImageDisplay";
import AttributesDisplay from "./AttributesDisplay";

const ConnectButtonWrapper = styled.div`
  height: 70px;
  justify-content: center;
`;

const ConnectButton = styled(WalletDialogButton)`
  background-color: rgb(76, 220, 188) !important;
`;

const PageWrapper = styled.div``;

const MintContainer = styled.div``; // add your styles here

const MainLinks = styled.span`
  text-decoration: none;
  color: rgb(92, 162, 201);
  cursor: pointer;
`;

const ConnectButtonStyling = styled.span`
  box-shadow: none;
  font-weight: bold;
  border-radius: 10px;
`;

const Footer = styled.div`
  bottom: 0;
  position: fixed;
`;

export interface HomeProps {
  connection: anchor.web3.Connection;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [displayAddress, setDisplayAddress] = useState("");
  const [showFullAddress, setShowFullAddress] = useState(false);

  const wallet = useWallet();

  const shortenAddress = (address: string, chars = 4): string => {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
  };

  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      setDisplayAddress(shortenAddress(wallet.publicKey?.toBase58() || ""));
    })();
  }, [wallet, props.connection]);

  useEffect(() => {
    if (showFullAddress) {
      setDisplayAddress(wallet.publicKey?.toBase58() || "");
    } else {
      setDisplayAddress(shortenAddress(wallet.publicKey?.toBase58() || ""));
    }
  }, [wallet, showFullAddress]);

  const handleNavClick = () => {
    setShowFullAddress(!showFullAddress);
  };

  const onUrlClick = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <PageWrapper>
      <NavbarCustom
        clicked={handleNavClick}
        balance={wallet.connected ? (balance || 0).toLocaleString() : ""}
        walletAddress={wallet.connected ? displayAddress : ""}
      ></NavbarCustom>
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <MintContainer>
          <div className="mb-3 px-1 user-select-none cursor-pointer">
            <MainLinks onClick={() => onUrlClick("https://links.gmoot.co/")}>
              links
            </MainLinks>
          </div>
          <div className="mb-3">
            <MainLinks
              onClick={() =>
                onUrlClick("https://digitaleyes.market/collections/Gmoot")
              }
            >
              secondary market
            </MainLinks>
          </div>
          <div className="mb-3">
            <MainLinks onClick={() => onUrlClick("https://rarity.gmoot.co")}>
              rarity ranking
            </MainLinks>
          </div>
          <div className="mb-3">
            <MainLinks
              onClick={() => onUrlClick("https://discord.gg/9aFbSSb6")}
            >
              discord
            </MainLinks>
          </div>

          {!wallet.connected ? (
            <ConnectButtonWrapper className="d-flex align-items-center ">
              <ConnectButton>
                <ConnectButtonStyling>connect wallet</ConnectButtonStyling>
              </ConnectButton>
            </ConnectButtonWrapper>
          ) : null}
        </MintContainer>
        <AttributesDisplay />
        <ImageDisplay />
        <Footer className=" py-3 bg-black w-100">
          <span
            className="mx-auto text-white cursor-pointer user-select-none"
            onClick={() => onUrlClick("https://twitter.com/iamgmoot")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </span>
        </Footer>
      </div>
    </PageWrapper>
  );
};

export default Home;
