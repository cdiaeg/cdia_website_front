import React, { useEffect, useState } from "react";
import "./details.css";
import { Col, Row } from "react-bootstrap";
import iconHost from "../../images/icons/icons/Free Hosting & Domain 2.png";
import { useSSR, useTranslation } from "react-i18next";
import Counter from "../counter/Counter";
export default function Details() {
  const [start, setStart] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("text");

      if (!targetElement) return;

      const rect = targetElement.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        console.log("ok");
        setStart(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setStart(false);
    };
  }, []);

  return (
    <div className="Details-component">
      <div className=" container ">
        <Row id="text">
          <Col md={6} lg={4} className="mb-3">
            <div className="wrap-card d-flex ">
              <div className="box">
                <img src={iconHost} alt="" />
              </div>
              <div className="contint">
                <h2>{start ? <Counter number={500} /> : "0"}</h2>
                <h5>{t("ProjectsDetails")}</h5>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <div className="wrap-card d-flex ">
              <div className="box">
                <img src={iconHost} alt="" />
              </div>
              <div className="contint">
                <h2>{start ? <Counter number={300} /> : "0"}</h2>
                <h5>{t("customerDetails")}</h5>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="wrap-card d-flex ">
              <div className="box">
                <img src={iconHost} alt="" />
              </div>
              <div className="contint">
                <h2>{start ? <Counter number={8} /> : "0"}</h2>
                <h5>{t("teamMembers")}</h5>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
