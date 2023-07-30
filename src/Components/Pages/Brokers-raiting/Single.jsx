import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import axios from "axios";
import MyLink from "../../Common/MyLink";
import { Rate } from "antd";
import { BrokerRatingWrapper } from "./style";
import StarSvg from "../../Common/Svgs/StarSvg";
import { useTranslation } from "react-i18next";

const Single = ({ id }) => {
  const [brokerRating, setBrokerRating] = useState([]);
  const [broker, setBroker] = useState([]);
  const [average, setAverage] = useState(0);
  const [ads, setAds] = useState([]);
  const [ratingPerson, setRatingPerson] = useState(0);
  const {t, i18n} = useTranslation();

  const currentLang = i18n.language;

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/brokers/report/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setBrokerRating(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/brokers/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setBroker(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    function getArrayAverage(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      setRatingPerson(arr.length)
      return sum / arr.length;
    }
    setAverage(getArrayAverage(brokerRating.map((rating) => rating.rating)));
  }, [brokerRating]);


  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/ads/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setAds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardLayout>
      <BrokerRatingWrapper average={average}>
        {broker.map((detail) => (
          <div key={detail.id} className="brokers-single">
            <ul id="breadcrumb">
              <span>
                <span>
                <MyLink to="/">{t('header.navbar.home')}</MyLink>|
                  <MyLink to="/brokers">{t('header.navbar.broker')}</MyLink>|
                  <span className="breadcrumb_last" aria-current="page">
                    {detail.name}
                  </span>
                </span>
              </span>
            </ul>

            <div className="brokers-single__top">
              <div className="brokers-single__top-left">
                <div className="brokers-single__top-left-logo">
                  <img src={`${IMG_URL}/media/${detail.file}`} />
                </div>
                <div className="brokers-single__top-left-cont">
                  <div className="brokers-single__top-left-cont-top">
                    <h4>{detail.name}</h4>
                    {/* <p>Последный визит: 3 дня назад</p> */}
                  </div>
                  <div className="brokers-single__top-left-cont-bot">
                    <div className="item">
                      <h5>{average}</h5>
                      <p>{ratingPerson > 1000 ? (ratingPerson / 1000).toFixed(1)+ "K" : ratingPerson}</p>
                    </div>
                    <div className="item">
                      <div className="box">
                      {[1, 2, 3, 4, 5].map((value) => (
                          <span
                            key={value}
                            // onClick={() => handleStarClick(value)}
                            style={{
                              cursor: "pointer",
                              color: value <= average ? "gold" : "gray",
                            }}
                          >
                            ★
                          </span>
                        ))}
                        {/* <div className="stars">
                          <StarSvg />
                          <StarSvg />
                          <StarSvg />
                          <StarSvg />
                          <StarSvg />
                        </div> */}
                      </div>
                      <p>{t('brokers.reyting')}</p>
                    </div>
                    <div className="item">
                      <h5>114.K</h5>
                      <p>{t('brokers.traders')}</p>
                    </div>
                    <div className="item">
                      <h5>6K</h5>
                      <p>{t('brokers.subscribes')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="brokers-single__top-right">
                <a className="mail" href="#">
                  <img src="/images/Icons/mail.svg" alt="" />
                </a>
                <a className="gray-btn" href="#">
                {t('brokers.subs')}
                </a>
                <a className="orange-btn" href="#">
                {t('brokers.treyd')}
                </a>
              </div>
            </div>

            <div className="brokers-single-review">
              <div className="brokers-single-review-item">
                <div
                  dangerouslySetInnerHTML={{ __html:currentLang==="en" ? detail.short_description_en : detail.short_description_ru }}
                ></div>
              </div>
              <div className="brokers-single-review-item">
                <div
                  dangerouslySetInnerHTML={{ __html:currentLang==="en" ? detail.full_description_en : detail.full_description_ru }}
                ></div>
              </div>
            </div>

            

          </div>
        ))}
        {ads
        .filter((cat) => cat.category_id === 4)
        .map((item) => (
          <div
            key={item.id}
            className="home-top__right-reklam-block rekl-gradient mb-0"
          >
            <a href={item.ads_url}>
              <img src={`${IMG_URL}/${item.file}`} alt="" />
            </a>
          </div>
        ))}
      </BrokerRatingWrapper>
    </DashboardLayout>
  );
};

export default Single;
