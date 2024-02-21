import React, { useContext, useEffect, useState } from "react";
import "./ourServices.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { langContext } from "../../langContext/LangContext";
import { useTranslation } from "react-i18next";
import axios from "axios";
const OurServices = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { lang, setlang } = useContext(langContext);
  const { t } = useTranslation();
  console.log(lang);
  useEffect(() => {
    axios
      .get("https://cdiaeg.com/api/our-services")
      .then((res) => setData(res?.data?.services))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  const arr = [
    {
      name: "Website Development",
      id: 1,
      kk: "<h1>jjj<h1/>",
      img: "https://kodesolution.com/2023/desix/wp-content/uploads/2023/07/bg10-550x550.jpg",
    },
    {
      name: "Digital Marketing ",
      id: 2,
      kk: "<h1>jjj<h1/>",
      img: "https://kodesolution.com/2023/desix/wp-content/uploads/2021/06/bg3-550x550.jpg",
    },
    {
      name: "Graphic Designing",
      id: 3,
      kk: "<h1>jjj<h1/>",
      img: "https://kodesolution.com/2023/desix/wp-content/uploads/2023/07/bg9-550x550.jpg",
    },
    {
      name: "Website Development",
      id: 4,
      kk: "<h1>jjj<h1/>",
      img: "https://kodesolution.com/2023/desix/wp-content/uploads/2023/07/bg9-550x550.jpg",
    },
    {
      name: "Website Development",
      id: 5,
      kk: "<h1>jjj<h1/>",
      img: "https://kodesolution.com/2023/desix/wp-content/uploads/2023/07/bg9-550x550.jpg",
    },
    {
      name: "Website Development",
      id: 6,
      kk: "<h1>jjj<h1/>",
      img: "https://kodesolution.com/2023/desix/wp-content/uploads/2023/07/bg9-550x550.jpg",
    },
    {
      name: "Website Development",
      id: 7,
      kk: "<h1>jjj<h1/>",
      img: "https://kodesolution.com/2023/desix/wp-content/uploads/2023/07/bg9-550x550.jpg",
    },
    {
      name: "Website Development",
      id: 8,
      kk: "<h1>jjj<h1/>",
      img: "https://kodesolution.com/2023/desix/wp-content/uploads/2023/07/bg9-550x550.jpg",
    },
    {
      name: "Website Development",
      id: 9,
      kk: "<h1>jjj<h1/>",
      img: "https://kodesolution.com/2023/desix/wp-content/uploads/2023/07/bg9-550x550.jpg",
    },
  ];
  console.log(data);
  return (
    <div className="services-page ">
      <div className="sectionOne d-flex justify-content-center align-items-center">
        <h1 className="title">{t("servicesCdia")}</h1>
      </div>
      <Container>
        <Row className="mt-5">
          {arr.map((ele) => (
            <Col key={ele.id} className="col-12 col-sm-6  col-lg-4 mb-4 ">
              <div className="department position-relative">
                <img
                  className="img-card"
                  src={ele.img}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                {/* <h1>
  
                {JSON.parse(ele.image).map((url, i) => (
                  <img
                    key={i}
                    src={`https://cdiaeg.com/storage/${url.download_link}`}
                    alt=""
                  />
                ))}
</h1>
                 */}
                <div
                  className=" name position-absolute"
                  style={{
                    left: lang == "en" ? 0 : 20,
                    right: lang == "en" ? 20 : 0,
                  }}
                >
                  {ele.name.split(" ").map((name, i) => (
                    <h5 className="card-name">{lang === "en" ? name : name}</h5>
                  ))}
                </div>
                <div
                  className="icon-card position-absolute"
                  style={{
                    // right: "20px",
                    left: lang === "ar" && 20,
                    right: lang === "en" && 20,
                  }}
                >
                  <BsFileEarmarkCodeFill className="fs-3" />
                  {/*                   
                  {JSON.parse(ele.icon).map((url, i) => (
                    <img
                      key={i}
                      // width={"30px"}
                      src={`https://cdiaeg.com/storage/${url.download_link}`}
                      alt=""
                    />
                  ))} */}
                </div>

                <div className="hover-content position-absolute">
                  <div className=" mb-3 icons">
                    <BsFileEarmarkCodeFill className="fs-3" />
                    {/* {JSON.parse(ele.icon).map((url, i) => (
                      <img
                        key={i}
                        // width={"30px"}
                        src={`https://cdiaeg.com/storage/${url.download_link}`}
                        alt=""
                      />
                    ))} */}
                  </div>
                  {/* {ele.name.split(" ").map((name, i) => (
                    <h5 className="text-light card-name">
                      {lang === "en" ? ele.name : ele?.name}
                    </h5>
                  ))} */}
                  {/* {ele.title_en.split(" ").map((name, i) => (
                    <h5 className="text-light card-name">
                      {lang === "en" ? ele?.title_en : ele?.title_ar}
                    </h5>
                  ))} */}
                  <p className="" style={{ color: "gray" }}>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                    {/* {lang === "en" ? ele?.description_en : ele?.description_ar} */}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
