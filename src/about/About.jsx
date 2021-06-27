import React from "react";
import { Container, Image, Row, Card, Button } from "react-bootstrap";
import BannerImage from "../images/carousel/2.jpg";
import cardImage from "../images/ebank.png";
import "./About.css";

const About = () => {
  return (
    <React.Fragment>
      <Container fluid style={{ padding: "0px" }}>
        <Row className="about-container">
          <Image
            src={BannerImage}
            style={{
              width: "100%",
              maxHeight: "400px",
            }}
            fluid
          />
          <div className="about-text-centered">About Us</div>
        </Row>
      </Container>
      <Container>
        <Row className="h4 text-center fw-light p-4">
          <p>
            Learn more about who we are, where to find us, and how to become
            part of our team.
          </p>
        </Row>
        <Row
          xs={12}
          md={4}
          lg={3}
          className="d-flex justify-content-center mb-3"
        >
          <HeaderCard />
        </Row>
      </Container>
    </React.Fragment>
  );
};

const HeaderCard = () => {
  let datas = [
    {
      id: 1,
      title: "CAREER CENTER",
      img: cardImage,
      description:
        "Interested in joining the team? Search job openings and discover what it takes to work at Anatolia Bank.",
    },
    {
      id: 2,
      title: "OUR BANK",
      img: cardImage,
      description:
        "Find out more about Anatolia Bank including recent news, our management team, and our accolades.",
    },
    {
      id: 3,
      title: "CONTACT INFO",
      img: cardImage,
      description:
        "View a list of locations and ATMs, or get in touch with one of our employees. Arayan bulmasada bulanlar arayanlardir",
    },
  ];

  return (
    <React.Fragment>
      {datas.map((data) => {
        const { id, title, img, description } = data;
        return (
          <Card
            style={{ width: "22rem", padding: "15px", background: "#f1f2f2" }}
            key={id}
            className="me-5 text-center mb-3"
          >
            <Card.Img src={img} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="secondary">Learn more</Button>
            </Card.Body>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default About;
