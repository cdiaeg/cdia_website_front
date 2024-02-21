import React, { useContext, useEffect, useState } from "react";
import "./webSite.css";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import Backgroundprojects from "../../../component/_background/Backgroundprojects";
import web1 from "../../../images/one (1).png";
import web2 from "../../../images/one (2).png";
import web3 from "../../../images/one (4).png";
import web4 from "../../../images/one (5).png";
import web5 from "../../../images/one (6).png";
import web6 from "../../../images/one (7).png";
import { FaLink } from "react-icons/fa";
import { FaArrowTrendDown } from "react-icons/fa6";
import Product from "../../../component/product/Product";
import { langContext } from "../../../langContext/LangContext";
import axios from "axios";
const WebSite = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { lang, setlang } = useContext(langContext);
  const { t } = useTranslation();
  console.log(lang);
  useEffect(() => {
    axios
      .get("https://cdiaeg.com/api/portfolio?page=1&category_id=2")
      .then((res) => setData(res?.data?.portfolio?.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  console.log(data, "web");
  return (
    <div className="web-page">
      <Backgroundprojects name={t("WebSite")} />
      <Product data={data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default WebSite;
