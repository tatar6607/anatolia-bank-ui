import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import logo from "../images/logo.png";
import "./MyNavbar.css";
import { Link } from "react-router-dom";
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
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/" className="">
        <Nav.Item>
          <Nav.Link href="/" className="nav a">
            Advantage
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Mobile Bank</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Sign in</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Register</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const SecondMenu = () => {
  const myClass = "second-navbar";
  return (
    <div>
      <Nav className="d-flex ps-5 ps-md-0 justify-content-center justify-content-md-end">
        {/* <Nav.Item>
          <Nav.Link bsPrefix={myClass}>
            <Icon name="university"> </Icon>
            Advantage
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link bsPrefix={myClass}>
            <Icon name="suitcase"> </Icon>
            Mobile Bank
          </Nav.Link>
        </Nav.Item> */}
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
  let [key, setKey] = useState("#/1");
  return (
    <div>
      <Navbar expand="md">
        <Container className="p-0">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              activeKey={key}
              onSelect={(k) => {
                setKey(k);
              }}
            >
              <Nav.Link className="third-navbar" as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link className="third-navbar" as={Link} to="/">
                Product
              </Nav.Link>
              <Nav.Link className="third-navbar" as={Link} to="/">
                Package
              </Nav.Link>
              <Nav.Link className="third-navbar" as={Link} to="/">
                Location
              </Nav.Link>
              <Nav.Link className="third-navbar" as={Link} to="/">
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
