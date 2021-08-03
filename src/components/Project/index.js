import React from "react";
import './index.css'
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "../../assets/images/audiofreq.JPG"
import "../../assets/images/pwgen.JPG"
import "../../assets/images/readmegen.JPG"
import "../../assets/images/refactoringhw.JPG"
import "../../assets/images/teamprofgen.JPG"
import "../../assets/images/tinderfofood.JPG"

function Project() {
  return (
    <Container className="carousel-container">

        <Carousel variant="dark">
        
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/audiofreq.JPG?text=First slide&bg=373940`).default}
              alt="AudioFreq"
            />
            <Carousel.Caption>
              <h3 className="text-white bg-dark">Audio Freq</h3>
              <Button href="https://github.com/chrischo94/audioFreq">Link to GitHub</Button> 
              <Button href="https://maple-eh-00291.herokuapp.com/">Link to Application</Button> 
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/pwgen.JPG?text=Second slide&bg=282c34`).default}
              alt="PW Gen"
            />

            <Carousel.Caption>
              <h3 className="text-info bg-dark">Password Generator</h3>
              <Button href="https://github.com/chrischo94/passwordGenerator">Link to GitHub</Button> 
              <Button href="https://chrischo94.github.io/passwordGenerator/">Link to Application</Button> 
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/readmegen.JPG?text=Third slide&bg=20232a`).default}
              alt="ReadME Generator"
            />

            <Carousel.Caption>
              <h3 className="bg-light">ReadME Generator</h3>
              <Button href="https://github.com/chrischo94/ReadMeGenerator2">Link to GitHub</Button> 
               
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/refactoringhw.JPG?text=Third slide&bg=20232a`).default}
              alt="Refactoring Webpage"
            />

            <Carousel.Caption>
              <h3 className="text-success bg-dark">Refactoring Webpage</h3>
              <Button href="https://github.com/chrischo94/refactoringHW">Link to GitHub</Button> 
              <Button href="https://chrischo94.github.io/refactoringHW/">Link to Application</Button> 
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/teamprofgen.JPG?text=Third slide&bg=20232a`).default}
              alt="Team Profile Generator"
            />

            <Carousel.Caption>
              <h3 className="text-warning bg-dark">Team Profile Generator</h3>
              <Button href="https://github.com/chrischo94/Team-Profile-Generator">Link to GitHub</Button> 
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/tinderfofood.JPG?text=Third slide&bg=20232a`).default}
              alt="Tinder for Food"
            />

            <Carousel.Caption>
              <h3 className="text-danger bg-dark">Tinder for Food</h3>
              <Button href="https://github.com/chrischo94/TinderForFood">Link to GitHub</Button> 
              <Button href="https://chrischo94.github.io/tinderForFood/">Link to Application</Button> 
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

    </Container>
  );
}

export default Project;
