import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from 'react-bootstrap'
import C from "../images/headerBG.jpg"
import { Fade } from "react-awesome-reveal";

function Cards() {
    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-6">
                <Fade duration="1250">
                <Card className="category" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={C} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className="view" >
                        <a  className="buttonBox" href="#">VIEW</a>
                    </div>
            </Card.Body>
            </Card>
            </Fade>
            </div>

            <div className="col-lg-3 col-md-6">
            <Fade duration="1250">
            <Card className="category" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={C} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className="view" >
                        <a  className="buttonBox" href="#">VIEW</a>
                    </div>
            </Card.Body>
            </Card>
            </Fade>
            </div>
            
            <div className="col-lg-3 col-md-6">
            <Fade duration="1250">
            <Card className="category" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={C} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className="view" >
                        <a  className="buttonBox" href="#">VIEW</a>
                    </div>
            </Card.Body>
            </Card>
            </Fade>
            </div>

            <div className="col-lg-3 col-md-6">
            <Fade duration="1250">
            <Card className="category" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={C} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className="view" >
                        <a  className="buttonBox" href="#">VIEW</a>
                    </div>
            </Card.Body>
            </Card>

                </Fade>
            </div>
            </div>
            
        </div>
    )
}

export default Cards
