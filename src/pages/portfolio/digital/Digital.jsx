import React from "react";
import Backgroundprojects from "../../../component/_background/Backgroundprojects";
import { useTranslation } from "react-i18next";

const Digital = () => {
  const { t } = useTranslation();
  return (
    <div className="digital-page">
      <Backgroundprojects name={t("digital")} />
    </div>
  );
};

export default Digital;
