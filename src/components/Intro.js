import React from "react";
import { Row, Col, Container, Card, Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Typewriter from "typewriter-effect";

export default function () {
  const styles = {
    clr: {
      color: "White",
      // color:'red',
      fontSize: "3rem",
    },
    img: {
      height: "25rem",
    },
  };
  return (
    <div>
      <span id="home"></span>
      <Container className="intro-main d-flex justify-content-center">
        <Alert variant="warning" className="shadow-lg">
          <Row>
            <Col sm={5}>
              <Card.Img
                style={styles.cardImg}
                src={require("./images/myphoto.jpeg")}
              />
            </Col>
            <Col sm={7}>
              <div className="intro-card ">
                Hello, my
                <br />
                name's <b>Sunny Dalvi.</b>
                <br />
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("I'm a <b>Web Developer.</b>")

                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Welcomes You")
                      .start();
                  }}
                />
              </div>
            </Col>
          </Row>
        </Alert>
      </Container>
    </div>
  );
}
