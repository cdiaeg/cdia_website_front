import React from "react";
import Aboutus from "../../component/about/About";
import { useTranslation } from "react-i18next";
import "./about.css";
export default function About() {
  const { t } = useTranslation();
  return (
    <div className="pageAboutUs">
      <div className="sectionOne d-flex justify-content-center align-items-center">
        <h1 className="title">{t("aboutCdia")}</h1>
      </div>
      <Aboutus />
    </div>
  );
}
