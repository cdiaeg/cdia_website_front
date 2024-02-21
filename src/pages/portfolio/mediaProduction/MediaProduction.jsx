import React from "react";
import { useTranslation } from "react-i18next";
import Backgroundprojects from "../../../component/_background/Backgroundprojects";

const MediaProduction = () => {
  const { t } = useTranslation();
  return (
    <div className="mobile-page">
      <Backgroundprojects name={t("media")} />
    </div>
  );
};

export default MediaProduction;
