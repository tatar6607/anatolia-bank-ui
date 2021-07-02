import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import logo from "../images/logo.png";
import "./MyNavbar.css";
import { Link, useHistory } from "react-router-dom";
const MyNavbar = () => {
  return (
    <div className="nav-main-top">
      <Container fluid className="nav-main-bottom">
        <Container className="main-top-container">
          <Row>
            <Col xs={4} md={12} className="d-none d-md-block">
              <FirstMenu />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row className="pt-1 d-flex justify-content-md-center text-center text-md-start">
          <Col md={4}>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ height: "90px", width: "200px" }}
              />
            </Link>
          </Col>
          <Col
            xs={12}
            md={8}
            className="d-grid mt-3 align-content-md-center align-content-lg-center"
          >
            <SecondMenu />
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ marginTop: "-15px", marginBottom: "-5px" }}>
        <Container>
          <Row>
            <Col>
              <ThirdMenu />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

const FirstMenu = () => {
  // useHistory react-router-dom da .push() methodu ile routing yapar
  const history = useHistory();
  const handleItemClick = (eventKey) => {
    eventKey === "home" ? history.push(`/`) : history.push(`/${eventKey}`);
  };
  return (
    <div>
      <Nav
        variant="tabs"
        defaultActiveKey="advantage"
        onSelect={handleItemClick}
      >
        <Nav.Item>
          <Nav.Link eventKey="advantage" className="nav a">
            Advantage
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="mobile">Mobile Bank</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="signin">Sign in</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="register">Register</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const SecondMenu = () => {
  const myClass = "second-navbar";
  return (
    <div>
      <Nav className="d-flex  ps-md-0 justify-content-center justify-content-md-end">
        <Nav.Item className="me-1 second-navbar">
          <Nav.Link bsPrefix={myClass}>
            <Icon
              name="user"
              circular
              size="large"
              className="d-block mb-1"
            ></Icon>
            Sign in
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="second-navbar">
          <Nav.Link bsPrefix={myClass}>
            <Icon
              name="unlock alternate"
              circular
              size="large"
              className="d-block mb-1 ms-1"
            ></Icon>
            Register
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const ThirdMenu = () => {
  const history = useHistory();
  const [activeKey, setActiveKey] = useState("home");

  const handleItemClick = (eventKey) => {
    eventKey === "home" ? history.push(`/`) : history.push(`/${eventKey}`);
    setActiveKey(eventKey);
  };

  return (
    <div>
      <Navbar expand="md">
        <Container className="p-0">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              activeKey={activeKey}
              onSelect={handleItemClick}
            >
              <Nav.Link className="third-navbar" eventKey="about">
                About Us
              </Nav.Link>
              <Nav.Link className="third-navbar" eventKey="home">
                Product
              </Nav.Link>
              <Nav.Link className="third-navbar" eventKey="package">
                Package
              </Nav.Link>
              <Nav.Link className="third-navbar" eventKey="location">
                Location
              </Nav.Link>
              <Nav.Link className="third-navbar" eventKey="contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
