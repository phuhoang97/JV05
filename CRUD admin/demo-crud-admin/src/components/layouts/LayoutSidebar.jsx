import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./LayoutSidebar.css";
import { Link } from "react-router-dom";

function LayoutSidebar() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Logo</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link to={"/dasboard"}>Dashboard</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to={"/users"}>UserPage </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to={"/products"}>Products </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LayoutSidebar;
