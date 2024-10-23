import React from "react";
import "./NavbarComp.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NavbarComp = () => {
  return (
    <div className="main-container">
      <Navbar expand="lg" className="fixed-top ">
        <Container className="navClass">
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-dark fw-bold">
              ARYA MIMARLIK
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-end w-100 ">
              <Nav.Link
                href="/"
                className="active text-uppercase d-flex align-items-center mx-3  "
              >
                {" "}
                <span>Anasayfa</span>
              </Nav.Link>

              <Nav.Link
                href="/about"
                className="text-uppercase d-flex align-items-center mx-2 "
              >
               <span>KURUMSAL</span> {" "}
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="text-uppercase d-flex align-items-center mx-2 "
              >
               <span>IS ORTAKLARIMIZ</span> {" "}
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="text-uppercase d-flex align-items-center mx-2 "
              >
               <span>REFERANSLARIMIZ</span>{" "}
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="text-uppercase d-flex align-items-center mx-2 "
              >
               <span>Iletisim</span> 
              </Nav.Link>
              <div className="navIcons">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
