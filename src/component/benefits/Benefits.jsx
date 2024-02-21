import React from "react";
import "./benefits.css";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import image from "../.././images/benefits.jpg";
export default function Benefits() {
  const { t } = useTranslation();
  return (
    <div className="benefits">
      <div className="container">
        <Row className="   align-items-center justify-content-between  ">
          <Col md={12} lg={8} xl={7} xxl={6}>
            <div className="contint mb-3">
              <h6 className="title">{t("benefits")}</h6>
              <h2 className="question">{t("questionBenefits")}</h2>
              <p className="benefits-text">{t("benefitsText")}</p>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <img src={image} className="w-100 " alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
