import React, { useContext } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../images/logo.jpg";
import "./naav.css";
import { Link, NavLink, useParams } from "react-router-dom";
import { langContext } from "../../langContext/LangContext";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
const Naav = () => {
  const { t, i18n } = useTranslation();
  const { lang, setlang } = useContext(langContext);
  const location = useLocation();

  const changeLang = () => {
    console.log(t("home"));
    if (lang === "ar") {
      i18n.changeLanguage("en");
      setlang("en");
    } else {
      i18n.changeLanguage("ar");
      setlang("ar");
    }
  };
  return (
    <Navbar expand="lg" className="naav">
      <Container>
        <Navbar.Brand href="#">
          <div className="logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              to={"/"}
              as={Link}
              className={location.pathname === "/" ? "activeLink" : "notActive"}
            >
              {t("Home")}
            </Nav.Link>
            <Nav.Link
              to={"/our-services"}
              as={Link}
              className={
                location.pathname === "/our-services"
                  ? "activeLink"
                  : "notActive"
              }
            >
              {" "}
              {t("OurSrvices")}
            </Nav.Link>
            <NavDropdown
              title={t("Portfolio")}
              id="navbarScrollingDropdown"
              className={
                location.pathname === "/web-development" ||
                location.pathname === "/digital-marketing" ||
                location.pathname === "/mobile-application" ||
                location.pathname === "/media-production"
                  ? "activeLink"
                  : "notActive"
              }
            >
              <NavDropdown.Item
                to={"/web-development"}
                as={Link}
                className={
                  location.pathname === "/web-development"
                    ? "dropdown-active"
                    : "dropdown-item"
                }
              >
                {t("WebSite")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item to={"/graphic-design"} as={Link}>
                {t("graphic")}
              </NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                to={"/digital-marketing"}
                as={Link}
                className={
                  location.pathname === "/digital-marketing"
                    ? "dropdown-active"
                    : "dropdown-item"
                }
              >
                {t("digital")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                to={"/mobile-application"}
                as={Link}
                className={
                  location.pathname === "/mobile-application"
                    ? "dropdown-active"
                    : "dropdown-item"
                }
              >
                {t("MobileApp")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                to={"/media-production"}
                as={Link}
                className={
                  location.pathname === "/media-production"
                    ? "dropdown-active"
                    : "dropdown-item"
                }
              >
                {t("media")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              to={"/about-us"}
              as={Link}
              className={
                location.pathname === "/about-us" ? "activeLink" : "notActive"
              }
            >
              {" "}
              {t("About")}
            </Nav.Link>

            <Nav.Link
              to={"/contact-us"}
              as={Link}
              className={
                location.pathname === "/contact-us" ? "activeLink" : "notActive"
              }
            >
              {t("ContactUs")}
            </Nav.Link>
          </Nav>
          <Nav
            className="mr-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button className="languge" onClick={changeLang}>
              {lang === "ar" ? "AR" : "En"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Naav;
