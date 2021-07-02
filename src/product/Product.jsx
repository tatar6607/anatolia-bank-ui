import "./Product.css";
import Gold01 from "../images/card/Gold01.jpeg";
import Platinum01 from "../images/card/Platinum01.jpeg";
import Silver01 from "../images/card/Silver01.jpeg";
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import React from "react";

const Product = () => {
  var cardData = [
    {
      title: "Gold Cards",
      image: Gold01,
      cards: [
        "Business Card",
        "Anatolia Express Card",
        "Secured Card",
        "Infinite Card",
      ],
      description:
        "Enjoy a 0% Intro APR on purchases and balance transfers for the first 12 billing cycles. After that, a variable APR applies $95/year there after.",
    },
    {
      title: "Platinum Cards",
      image: Platinum01,
      cards: ["Cash+ Card", "Shop & Fly Card"],
      description:
        "For a limited time, earn a $150 bonus after making $500 in eligible purchases within the first 90 days of account opening.Enjoy a 0% intro APR9 on balance transfers for the first 12 billing cycles. After that the APR is variable, currently 13.99%–23.99%.",
    },
    {
      title: "Silver Cards",
      image: Silver01,
      cards: ["Anatolia Travel Card", "Student Cash Back Credit Card"],
      description:
        "For a limited time, earn a $150 bonus after making $500 in eligible purchases within the first 90 days of account opening. Enjoy a 0% intro APR9 on balance transfers for the first 12 billing cycles. After that the APR is variable, currently 13.99%–23.99%.",
    },
  ];

  return (
    <Container fluid className="pro-ana">
      <Row>
        <div className="pro-header">Anatolia Cards</div>
      </Row>

      <Row>
        {cardData.map((data) => {
          const { title, image, cards, description } = data;
          return (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center"
            >
              <Card
                style={{ maxWidth: "25rem", marginRight: "2px" }}
                className="pro-list"
              >
                <Card.Title className="fw-bold p-1">
                  <p>
                    <Icon className="icn1 icon-card" name="angle right"></Icon>
                    {title}
                  </p>
                </Card.Title>
                <Card.Img className="pic-4 rounded-3 mb-3" src={image} />
                <ListGroup className="list-group-flush">
                  {cards.map((card) => (
                    <ListGroupItem className="py-1">
                      <Card.Link href="#" className="list-btn">
                        <p>
                          {card}
                          <Icon name="angle right icon-card"></Icon>
                        </p>
                      </Card.Link>
                    </ListGroupItem>
                  ))}
                </ListGroup>
                <Card.Body>
                  <Card.Text className="text d-none d-md-block">
                    {description}
                  </Card.Text>
                  <Card.Link href="#" className="details">
                    Details
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Product;
