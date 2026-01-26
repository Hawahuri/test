// Layout.jsx
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Layout({userInfo}) {
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
   
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     
        
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>
          Home 
        </Link>
        <Link to="/about" style={{ color: "white", marginRight: "10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "white" }}>
          Contact
        </Link>
     

      
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>

   
      <footer style={{ padding: "10px", background: "#000000ff", textAlign: "center",bottom:0,position:"fixed",left:0,right:0}}>
        © 2025 My Website
      </footer>
    </>
  );
}

export default Layout;