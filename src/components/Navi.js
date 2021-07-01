import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar,Nav,NavDropdown} from "react-bootstrap"


function Navi() {
    return (
        <div className="Container" >
            <Navbar bg="transparent" expand="lg">
            <div className="container">
  <Navbar.Brand href="#home"  className="Navi">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto" >
      <Nav.Link href="#home" className="Navi">Home</Nav.Link>
      <Nav.Link href="#link"  className="Navi">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
  </div>
</Navbar>


        </div>
    )
}

export default Navi
