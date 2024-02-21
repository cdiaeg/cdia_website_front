import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import web1 from "../../images/one (1).png";
import web2 from "../../images/one (2).png";
// import web3 from "../../../images/one (4).png";
// import web4 from "../../../images/one (5).png";
// import web5 from "../../../images/one (6).png";
// import web6 from "../../../images/one (7).png";
import { FaLink } from "react-icons/fa";
import { FaArrowTrendDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { langContext } from "../../langContext/LangContext";
const Product = ({ data, isLoading, error }) => {
  const { t } = useTranslation();
  const { lang, setlang } = useContext(langContext);
  // useEffect(() => {
  //   axios
  //     .get("https://cdiaeg.com/api/portfolio?page=1&category_id=1")
  //     .then((res) => console.log(res?.data?.portfolio))
  //     .catch((err) => console.log(err))
  //     .finally(() => console.log("ok"));
  // }, []);
  return (
    <div className=" container my-5">
      <Row>
        <Col className="mb-3" md={6} lg={6}>
          <div className="wrap-card position-relative  ">
            <div className=" wrap-img ">
              <img src={web1} alt="not found" />
            </div>
            <div className="contant">
              <div className="circle">
                <FaArrowTrendDown />
              </div>
              <div className="  ">
                <p>Technology</p>
                <a href="">Digital Marketing</a>
              </div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fec63f"
            fill-opacity="1"
            d="M0,0L1440,224L1440,320L0,320Z"
          ></path>
        </svg> */}
          </div>
        </Col>
        <Col className="mb-3" md={6} lg={6}>
          <div className="wrap-card">
            <div className=" wrap-img position-relative ">
              <img src={web2} alt="not found" />
            </div>
          </div>
        </Col>
        {/* <Col className="mb-3" md={4} lg={6}>
      <div className="wrap-card">
        <div className=" wrap-img position-relative ">
          <img src={web3} alt="not found" />
          <FaLink className="link-icon position-absolute " />
        </div>
    
      </div>
    </Col>
    <Col className="mb-3" md={4} lg={6}>
      <div className="wrap-card">
        <div className=" wrap-img position-relative ">
          <img src={web4} alt="not found" />
          <FaLink className="link-icon position-absolute " />
        </div>
     
      </div>
    </Col>
    <Col className="mb-3" md={4} lg={6}>
      <div className="wrap-card">
        <div className=" wrap-img position-relative ">
          <img src={web5} alt="not found" />
          <FaLink className="link-icon position-absolute " />
        </div>
     
      </div>
    </Col>
    <Col className="mb-3" md={4} lg={6}>
      <div className="wrap-card">
        <div className=" wrap-img position-relative ">
          <img src={web6} alt="not found" />
         
        </div>
     
      </div>
    </Col>
    <Col className="mb-3" md={4} lg={6}>
      <div className="wrap-card">
        <div className=" wrap-img position-relative ">
          <img src={web4} alt="not found" />
          <FaLink className="link-icon position-absolute " />
        </div>
     
      </div>
    </Col>
    <Col className="mb-3" md={4} lg={6}>
      <div className="wrap-card">
        <div className=" wrap-img position-relative ">
          <img src={web2} alt="not found" />
          <FaLink className="link-icon position-absolute " />
        </div>
     
      </div>
    </Col> */}
      </Row>
      <Row>
        {data?.map((ele) => (
          <Col className="mb-3" md={6} lg={6} key={ele.id}>
            <div className="wrap-card position-relative  ">
              <div className=" wrap-img ">
                {JSON.parse(ele.image).map((url, i) => (
                  <img
                    key={i}
                    src={`https://cdiaeg.com/storage/${url.download_link}`}
                    alt="not found"
                  />
                ))}
                {/* <img src={web1} alt="not found" /> */}
              </div>
              <div className="contant">
                <div className="circle">
                  <FaArrowTrendDown />
                </div>
                <div className="  ">
                  <p>
                    {" "}
                    {lang === "en" ? ele?.description_en : ele?.description_ar}
                  </p>
                  <a href={ele?.link}>
                    {lang === "en" ? ele.title_en : ele.title_ar}
                  </a>
                </div>
              </div>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
             <path
               fill="#fec63f"
               fill-opacity="1"
               d="M0,0L1440,224L1440,320L0,320Z"
             ></path>
           </svg> */}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Product;
