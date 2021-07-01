import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from 'react-bootstrap'
import Fashionone from "../images/fashion1.jpg"
import Fashiontwo from "../images/fashion2.jpg" 
import Fashionthree from "../images/fashion3.jpg" 

function Body() {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-11 col-sm-11 col-lg-2 sidenav">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-links active" href="#">PRODUCT 1</a>
                    </li>
                    <hr/>
                    <li class="nav-item">
                        <a class="nav-links" href="#">PRODUCT 2</a>
                    </li>
                    <hr/>
                    <li class="nav-item">
                        <a class="nav-links" href="#">PRODUCT 3</a>
                    </li>
                    <hr/>
                    <li class="nav-item">
                        <a class="nav-links " href="#">PRODUCT 4</a>
                    </li>
                    <hr/>
                    <li class="nav-item">
                        <a class="nav-links " href="#">PRODUCT 5</a>
                    </li>
                    <hr/>
                    <li class="nav-item">
                        <a class="nav-links " href="#">PRODUCT 6</a>
                    </li>
                    <hr/>
                    <li class="nav-item">
                        <a class="nav-links " href="#">PRODUCT 7</a>
                    </li>
                </ul>

                </div>
                <div className="col-md-12 col-lg-9" id="caro">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Fashionthree}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Fashiontwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Fashionone}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





                </div>
            
            </div>
            
        </div>
    )
}

export default Body
