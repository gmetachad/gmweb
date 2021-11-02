import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const GmootSpan = styled.span`
  font-weight: bold;
  font-size: 1.75rem;
  user-select: none;
`;

const NavbarCustom = (props: any) => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="/">
            <GmootSpan>
              gmoot
            </GmootSpan>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end w-100">
              {props.walletAddress && (
                <Nav.Link
                  className="text-white user-select-none"
                  onClick={props.clicked}
                >
                  <span className="fw-bold">
                    {props.walletAddress}
                  </span>
                  {" - "}
                  <span className="fw-bold">
                    {props.balance}
                  </span>{" "}
                  SOL
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCustom;
