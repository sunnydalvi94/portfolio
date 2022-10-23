import React from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { Dot } from "react-bootstrap-icons";

export default function Cards() {
  const styles = {
    bg: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "white",
      paddingBottom: "2rem",
      paddingTop: "1rem",
    },
  };

  return (
    <div>
      <Container>
        <span id="features"></span>
        <h1 style={styles.bg}>Projects</h1>
        <Row xs={1} className="g-4">
          <Col lg="2" style={{ width: "40rem" }}>
            <a href="https://my-restaurant-demo1.netlify.app/" target="_blank">
              <Alert variant="success">
                <div className="d-grid gap-2">
                  <Alert variant="warning" size="lg">
                    <h3>
                      <Spinner animation="grow" size="sm" variant="warning" />
                      &nbsp;Restaurant Website
                    </h3>
                  </Alert>
                </div>
                <Card.Img variant="top" src={require("./images/res.png")} />
                <Card.Body>
                  <Card.Text className="pt-3">
                    <p className="cardDes">
                      <Dot size={30} />
                      Restaurant Demo is a bootstrap based static website with a
                      scrollable nav bar. <br />
                      <Dot size={30} />
                      its navigation to all pages includes today's menu, menu
                      list, history, contact form, and so forth.
                      <br />
                      <Dot size={30} />
                      <b> Tools /Technology :</b> Html, CSS, Bootstrap.
                      <br />
                      <div className="d-flex justify-content-end">
                        <Button variant="secondary" size="sm">
                          View
                        </Button>
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Alert>
            </a>
          </Col>
          <Col lg="2" style={{ width: "40rem" }}>
            <a
              href="https://flood-management-system.netlify.app/"
              target="_blank"
            >
              <Alert variant="success">
                <div className="d-grid gap-2">
                  <Alert variant="warning" size="lg">
                    <h3>
                      <Spinner animation="grow" size="sm" variant="warning" />
                      &nbsp; Assam Flood Management System{" "}
                    </h3>
                  </Alert>
                </div>
                <Card.Img variant="top" src={require("./images/flood.jpeg")} />

                <Card.Body>
                  <Card.Text className="pt-3">
                    <p className="cardDes">
                      <Dot size={30} />
                      A React web-based application to provide effective
                      measures for flood management.
                      <br /> <Dot size={30} />
                      objective of this project is to help the people of Assam
                      communicate with the rescue team. <br /> <Dot size={30} />
                      <b> Tools /Technology :</b> HTML, CSS, Bootstrap, React
                      js, Spring Boot, MySQL
                      {/* <div className="d-flex justify-content-end">
                        <Button variant="secondary" size="sm">
                          View
                        </Button>
                      </div> */}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Alert>
            </a>
          </Col>
          <Col lg="2" style={{ width: "40rem" }}>
            <a
              href="https://github.com/sunnydalvi94/s3Realestate"
              target="_blank"
            >
              <Alert variant="success">
                <div className="d-grid gap-2">
                  <Alert variant="warning" size="lg">
                    <h3>Real Estate Website</h3>
                  </Alert>
                </div>

                <Card.Img
                  variant="top"
                  src={require("./images/real-estate.png")}
                />

                <Card.Body>
                  <Card.Text className="pt-3">
                    <p className="cardDes">
                      <Dot size={30} />
                      The real estate website is based on React Js and
                      React-bootstrap, where we provide a service such as rent,
                      purchase, sell the property in various locations in pune,
                      maharashtra. <br /> <Dot size={30} />I created pages that
                      included homepage, service page, contact page with google
                      map, etc.
                      <br /> <Dot size={30} /> <b>Tools / Technology:</b> React
                      Js, React-Bootstrap etc.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Alert>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
