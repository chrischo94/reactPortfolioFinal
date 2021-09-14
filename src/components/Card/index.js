import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

function Card() {
    return (
        <Container>
            <Row>
                
                <Col xs={6} md={4}>
                <Image src={require(`../../../assets/images/audiofreq.JPG`)} roundedCircle />
                </Col>
                
            </Row>
        </Container>
    );
}

export default Card;