import React from "react";
import "./NavbarComp.css";
import { Container, Nav, Navbar } from "react-bootstrap/";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div className="main-container">
      <Navbar expand="lg" className=" fixed-top navbar-light bg-light  ">
        <Container fluid className="navClass">
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-dark fw-bold">
              ARYA DİZAYN İNŞAAT
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-end  w-100 ">
              <Nav.Link href="/" className=" active text-uppercase mx-2 ">
                {" "}
                <span>Anasayfa</span>
              </Nav.Link>

              <Nav.Link href="/kurumsal" className=" text-uppercase mx-2 ">
                <span>KURUMSAL</span>{" "}
              </Nav.Link>
              <Nav.Link href="/isortaklarimiz" className="text-uppercase mx-2 ">
                <span>İŞ ORTAKLARIMIZ</span>{" "}
              </Nav.Link>
              <Nav.Link href="/referanslar" className=" text-uppercase  mx-2 ">
                <span>REFERANSLARIMIZ</span>{" "}
              </Nav.Link>
              <Nav.Link href="/iletisim" className=" text-uppercase mx-2 ">
                <span>İletİŞİm</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
