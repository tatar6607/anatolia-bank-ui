import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../images/logoAnatolia.png";
const Footer = () => {
  return (
    <div className=" bg-dark container-fluid fixed-bottom">
      <div className=" container text-center text-md-left">
        <Row className="text-center text-md-left mt-3 pb-3">
          <Col className="mt-3">
            <img src={logo} style={{ height: "90px" }} alt="" />
            <p>
              112, West road, F1 456 Tram Town. Office No 2312
              info@bankofanatolia.com 234-3434567
            </p>
          </Col>
          <Col>
            <h6 className="links">Links</h6>
            <p>FAQs</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Home</p>
          </Col>
          <Col>
            <h6 className="links">About Us</h6>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>Sign In</p>
            <p>My Acount</p>
          </Col>
          <Col>
            <h6 className="links">Contact Us</h6>
            <p>Please connect with us throught following channels</p>
            <span>
              {" "}
              <p>
                <i className="fa fa-home"></i> New York NY 10012, US{" "}
              </p>
            </span>
            <span>
              {" "}
              <p>
                <i className="fa fa-envelope"></i> contact_us@anatolia{" "}
              </p>
            </span>
            <span>
              <p>
                {" "}
                <i className="fa fa-phone"></i> + 01 234 567 88{" "}
              </p>
            </span>
            <span>
              <p>
                {" "}
                <i className="fa fa-fax"></i> + 01 234 567 89{" "}
              </p>
            </span>
          </Col>
        </Row>
        <hr
          style={{
            backgroundColor: "#fff",
            height: 0.5,
            borderColor: "#fff",
          }}
        />
        <Row d-flex align-items-center>
          <Col>
            <p class="text-left">© 2021 Copyright - TechproEd</p>{" "}
          </Col>

          <Col className="d-flex justify-content-end">
            <p className="d-inline float-left mx-3 ">
              <i className="fa fa-facebook logo"></i>{" "}
            </p>{" "}
            <p className="d-inline float-left mx-3 ">
              <i className="fa fa-twitter logo"></i>{" "}
            </p>
            <p className="d-inline float-left mx-3 ">
              {" "}
              <i className="fa fa-google-plus logo"></i>
            </p>
            <p className="d-inline float-left mx-3 ">
              {" "}
              <i className="fa fa-linkedin logo"></i>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
