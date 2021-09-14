import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "../../../assets/images/me.JPG"

function Card() {
    return (
     
    <Image src={require(`../../assets/images/me.JPG`).default}
    alt="photo of myself" roundedCircle />

                
    );
}

export default Card;