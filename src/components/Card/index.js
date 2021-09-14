import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "../../../assets/images/me.JPG"

function Card() {
    return (
        <Container>
            <Row>
                
                <Col xs={6} md={4}>
                    <Image src={require(`../../assets/images/me.JPG`).default}
              alt="photo of myself" roundedCircle/>

                </Col>
                
            </Row>
        </Container>
    );
}

export default Card;