import "./App.css";
import { useMemo } from "react";

import Home from "./Home";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { Route, Switch } from "react-router-dom";

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = "https://api.mainnet-beta.solana.com";
const connection = new anchor.web3.Connection(rpcHost);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home connection={connection} txTimeout={txTimeout} />
              )}
            />
          </Switch>
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
