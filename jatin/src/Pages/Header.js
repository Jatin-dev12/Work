import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import pic from '../Pages/js.png';
import '../App.css'


function Header() {
  return (
    
    <Navbar expand="xl" className="bg-body-tertiary">
    
    <Container className="">
    <Navbar.Brand href="#home">
            <img
              src={pic}             
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
        <Nav className="justify-content-center">
  



         <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/list">Sorted List</Nav.Link>
          <Nav.Link href="/work">Mini Projects</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
              
          
      </Navbar.Collapse>
             <Button type="submit" size="lg">  📞 8221866158</Button>
    </Container>
  </Navbar>


  );
}

export default Header;
