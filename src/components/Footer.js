import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  Download,
  Envelope,
  Github,
  Linkedin,
  TelephoneFill,
} from "react-bootstrap-icons";

export default function Footer() {
  const styles = {
    bg: {
      backgroundColor: "#242329",
      padding: "2rem",
      marginTop: "5rem",
    },
  };
  return (
    <div style={styles.bg} id="footer">
      <Container className="footerElement">
        <Row>
          <Col>
            <h5>Portfolio.</h5>
            <h6>Thank You for your support !</h6>
          </Col>
          <Col>
            <a href="#home">
              <h5>Home</h5>
            </a>
          </Col>
          <Col>
            <a href={require("./images/resume.pdf")} download>
              <h5>
                {" "}
                <Download color="skyblue" size={25} /> &nbsp; Download Resume
              </h5>
            </a>
          </Col>
          <Col>
            <h5>Let's Chat</h5>
            <h6>
              <a href="https://www.linkedin.com/in/sunny-dalvi2022/">
                <Linkedin color="skyblue" size={20} />
                &nbsp; linkedIn
              </a>{" "}
            </h6>
            <h6>
              <a href="https://github.com/sunnydalvi94">
                <Github color="skyblue" size={20} />
                &nbsp; GitHub
              </a>{" "}
            </h6>
            <h6>
              <Envelope color="skyblue" size={20} />
              &nbsp; sunnydalvi94@gmail.com
            </h6>
            <h6>
              <TelephoneFill color="skyblue" size={20} />
              &nbsp; 7498511963
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
