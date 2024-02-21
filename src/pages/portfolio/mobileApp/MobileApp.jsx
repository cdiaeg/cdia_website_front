import React from "react";
import { useTranslation } from "react-i18next";
import Backgroundprojects from "../../../component/_background/Backgroundprojects";

const MobileApp = () => {
  const { t } = useTranslation();
  return (
    <div className="mobile-page">
      <Backgroundprojects name={t("MobileApp")} />
    </div>
  );
};

export default MobileApp;
