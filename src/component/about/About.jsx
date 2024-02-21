import React, { useContext } from "react";
import "./about.css";
import { Col, Row } from "react-bootstrap";
import aboutOne from "../../images/about1.jpg";
import aboutTwo from "../../images/about 2.jpg";
import { langContext } from "../../langContext/LangContext";
import { useTranslation } from "react-i18next";
import iconWeb from "../../images/icons/Free SSL 2.png";
const About = () => {
  let { lang } = useContext(langContext);
  const { t } = useTranslation();
  console.log(lang, "d");
  return (
    <div className=" container-fluid about pb-5">
      <Row className="  px-lg-4">
        <Col lg={6} className=" position-relative  ">
          <img src={aboutOne} alt="" className="frist-img m-auto" />
          <img
            src={aboutTwo}
            alt=""
            className=" position-absolute second-img"
            style={{ left: lang === "en" && 0, right: lang === "ar" && 0 }}
          />
        </Col>
        <Col lg={6}>
          <p className="aboutCompany fs-5  fw-lighter">
            {t("aboutCompany").toUpperCase()}
          </p>
          <h1 className="title fw-bolder">{t("aboutReady")}</h1>
          <p className="identification  my-3  my-xl-5  text-white-50">
            {t("identification")}
          </p>
          <Row className=" text-light">
            <Col className="  d-flex  align-items-center">
              <div className=" wrap-icon">
                <img
                  src={iconWeb}
                  alt=""
                  className=" position-relative z-2 icon"
                  width={"60px"}
                />
                <div
                  className=" position-absolute circle"
                  style={{ right: lang === "en" ? "10%" : "35%" }}
                ></div>
              </div>
              <p className="w-50 fw-bold fs-6 m-0">{t("software")}</p>
            </Col>
            <Col className="  d-flex  align-items-center">
              <div className="  wrap-icon">
                <img
                  src={iconWeb}
                  alt=""
                  className=" position-relative z-2 icon"
                  width={"60px"}
                />
                <div
                  className=" position-absolute circle"
                  style={{ right: lang === "en" ? "10%" : "35%" }}
                ></div>
              </div>
              <p className="w-50 fw-bold fs-6 m-0">{t("marketing")}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default About;
