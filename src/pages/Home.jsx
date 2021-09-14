import React from "react";
import Header from "../components/Header";
import Project from "../components/Project"
import Footer from "../components/Footer"
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
function Home(){
return (
  <div>
    <Header />
    <Container>
  
      <Row>
        <h4 id="about-me">About Me</h4>
        <p>I am a graduate of the University of California, Los Angeles with a BA in Sociology. Currently, I am working for a recruiting firm that specializes in placing executive-level candidates in Fortune 500 companies.
        I am also fluent in Korean and proficient in React, MongoDB, SQL, NoSQL, CSS, and Adobe Photoshop.</p>
      </Row>
      <hr></hr>
      <Row>
        <h4 id="projects">Projects</h4>
        
          <Project />
       
      </Row>
      <hr></hr>
      <Row>
        <Footer />
      </Row>
    </Container>

  </div>
)

}
export default Home;
