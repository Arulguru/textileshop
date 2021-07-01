import React from 'react'
import Typed from "react-typed"
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap"




const Header = () => {
    return (
        <div className="header-wrapper ">
            <Navbar bg="transparent" expand="lg" className="navigation">
  <Navbar.Brand href="#home" className="nav-link">Textile Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>








            <div className="container main-info">
                <h2>qwertyuio | zxcvbnm</h2>
                <Typed
                className="typed-text"
                strings={["T Shirts","Shorts","Hoodies","Tracks"]}
                typeSpeed={50}
                backSpeed={40}
                loop
                />
                   <div className="contact" >
                        <a  className="buttonBox" href="#">CONTACT ME</a>
                    </div>

                
            </div>
            
        </div>
    )
}

export default Header