import React from "react";
import "./home.css";
import banner from "../../images/banner 1.jpg";
import { useTranslation } from "react-i18next";
import About from "../../component/about/About";
import Service from "../../component/serviceComponent/Service";
import Benefits from "../../component/benefits/Benefits";
import Details from "../../component/details/Details";
import Contact from "../../component/contact/Contact";
import OurClients from "../../component/ourClients/OurClients";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="home_Page ">
      <div className=" position-relative">
        <img src={banner} alt="not found" className="w-100" />
        <div className=" position-absolute top-50 frist_baner ">
          <h1>{t("bannerOne").toLocaleUpperCase()}</h1>
        </div>
      </div>
      <About />
      <Service />
      <Benefits />
      <Details />
      <OurClients />
      <Contact />
    </div>
  );
};

export default Home;
