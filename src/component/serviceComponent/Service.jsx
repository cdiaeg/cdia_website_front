import React, { useContext } from "react";
import { langContext } from "../../langContext/LangContext";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import "./service.css";
import iconWeb from "../../images/icons/icons/Websites 2.png";
import iconMobile from "../../images/icons/icons/Mobile Apps 2.png";
import iconSeo from "../../images/icons/icons/SEO Service 2.png";
import iconGraphic from "../../images/icons/icons/Graphic Creative Designs 2.png";
import iconHost from "../../images/icons/icons/Free Hosting & Domain 2.png";
const Service = () => {
  let { lang } = useContext(langContext);
  const { t } = useTranslation();

  return (
    <div className="service">
      <div className="container py-3 py-md-4  py-lg-5 ">
        <div className="title">
          <p> {t("OurSrvices").toUpperCase()}</p>
          <h2>{t("service")}</h2>
        </div>
        <Row className="cards justify-content-center ">
          <Col md={6} xl={3} className="mb-3">
            <div className="Card">
              <div className="wrap-icon">
                <img src={iconWeb} alt="website not found" />
              </div>
              <h5 className="department-name">{t("WebSite")}</h5>
              <p className="department-text">{t("webText")}</p>
            </div>
          </Col>
          <Col md={6} xl={3} className="mb-3">
            <div className="Card">
              <div className="wrap-icon">
                <img src={iconMobile} alt="website not found" />
              </div>
              <h5 className="department-name">{t("MobileApp")}</h5>
              <p className="department-text">{t("mobileAppText")}</p>
            </div>
          </Col>
          <Col md={6} xl={3} className="mb-3">
            <div className="Card">
              <div className="wrap-icon">
                <img src={iconWeb} alt="website not found" />
              </div>
              <h5 className="department-name">{t("digital")}</h5>
              <p className="department-text">{t("digitalText")}</p>
            </div>
          </Col>
          <Col md={6} xl={3} className="mb-3">
            <div className="Card">
              <div className="wrap-icon">
                <img src={iconGraphic} alt="website not found" />
              </div>
              <h5 className="department-name">{t("graphic")}</h5>
              <p className="department-text">{t("graphicText")}</p>
            </div>
          </Col>
          <Col md={6} xl={3} className="mb-3">
            <div className="Card">
              <div className="wrap-icon">
                <img src={iconHost} alt="website not found" />
              </div>
              <h5 className="department-name">{t("hosting")}</h5>
              <p className="department-text">{t("hostingText")}</p>
            </div>
          </Col>
          <Col md={6} xl={3} className="mb-3">
            <div className="Card">
              <div className="wrap-icon">
                <img src={iconSeo} alt="website not found" />
              </div>
              <h5 className="department-name">{t("seo")}</h5>
              <p className="department-text">{t("seoText")}</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Service;
