import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const styles = {
    bg: {
      fontSize: "1.8rem",
      fontWeight: "bold",
    },
  };
  return (
    <>
      <div id="home">
        <Container>
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container style={styles.bg}>
              <Navbar.Brand href="#home"> Portfolio.</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#features">Projects</Nav.Link>
                  <Nav.Link href="#footer">About Us</Nav.Link>
                  <Nav.Link> </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </>
  );
}

export default Header;
