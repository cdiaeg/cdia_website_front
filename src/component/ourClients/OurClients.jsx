import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ourClints.css";
import Slider from "react-slick";
import x from "../../../src/images/banner 1.jpg";
import axios from "axios";
const OurClients = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    axios
      .get("https://cdiaeg.com/api/clients")
      .then((res) => setData(res?.data?.clients))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="section-clients p-3">
      <div className="container">
        <div className="title">
          <p> {t("OurClients").toUpperCase()}</p>
          <h2>{t("Clients")}</h2>
        </div>
        <div>
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id}>
                {JSON.parse(item.image).map((url, i) => (
                  <img
                    key={i}
                    src={`https://cdiaeg.com/storage/${url.download_link}`}
                    alt=""
                  />
                ))}
              </div>
            ))}
            {/* <div>
              <img src={x} alt="" />
            </div>
            <div>
              <img src={x} alt="" />
            </div>
            <div>
              <img src={x} alt="" />
            </div>
            <div>
              <img src={x} alt="" />
            </div>
            <div>
              <img src={x} alt="" />
            </div>
            <div>
              <img src={x} alt="" />
            </div>
            <div>
              <h3>8</h3> */}
            {/* </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
