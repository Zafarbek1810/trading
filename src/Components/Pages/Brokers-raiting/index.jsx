import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import Rating from "./Rating";
import { useTranslation } from "react-i18next";

const BrokersRaiting = () => {
  const [brokers, setBrokers] = useState([]);
  const [brokerRating, setBrokerRating] = useState([]);
  const [tft, setTft] = useState([]);
  const [ads, setAds] = useState([]);
  const [rating, setRating] = useState(0); // Initial rating is 0
  const {t} = useTranslation()

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

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/brokers/report/`,
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
      url: `${API_URL}/brokers/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setBrokers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/tft/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

      .then((res) => {
        console.log(res.data);
        setTft(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  
  console.log(tft.map((obj)=>(obj.title) ));

  return (
    <DashboardLayout>
      <div className="rating">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t('sidebar.brokers-raiting')}
              </span>
            </span>
          </span>
        </ul>

        <div className="rating__top">
          <h1>{t('sidebar.brokers-raiting')}</h1>
          <p>
          {t('brokerRaiting.descr1')}
          </p>
        </div>

        <div className="rating__content">
          <p className="rating__content-text">
          {t('brokerRaiting.descr2')}
          </p>

          <div className="rating__content-box">
            {brokers.map((item) => (
              <div key={item.id} className="rating__content-item">
                <div className="rating__content-item-left">
                  <span className="top-num">№{item.topNumber}</span>
                  <div className="rating__content-item-left-top">
                    <h3>{item.name}</h3>
                    {item.isTrusted ? (
                      <span className="green">{t('homepage.canTrust')}</span>
                    ) : (
                      <></>
                    )}
                  </div>

                  <h4>
                  {t('homepage.toolsTrading')} {" "}
                    <span>{tft.filter((pro) => pro.id === item.id).map((obj)=>{return obj.title})}</span>
                  </h4>

                  <div className="rating__content-item-left-bot">
                    <div className="est">
                      <p>5.0 {t('homepage.perfect')}</p>
                      <Rating id={item.id} />
                    </div>

                    <div className="rev">
                      <div className="box">
                        <img src="/images/Icons/reviews.svg" alt="" />
                        <p>15,4k</p>
                      </div>
                      <p>{t('homepage.reviews')}</p>
                    </div>

                    <div className="acc">
                      <div className="box">
                        <img src="/images/Icons/acc.svg" alt="" />
                        <p>105k</p>
                      </div>
                      <p>{t('homepage.acc')}</p>
                    </div>

                    {item.isChecked ? (
                      <div className="check">
                        <img src="/images/Icons/Frame.svg" alt="" />
                        <p>{t('homepage.checked')}</p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>

                  <MyLink
                    className="gray-btn"
                    to={`/brokers-raiting-single?id=${item.id}`}
                  >
                    {t('homepage.learnMore')}
                  </MyLink>
                </div>

                <div className="rating__content-item-right">
                  <div className="img-box">
                    <img src={`${IMG_URL}/media/${item.file}`} />
                    {item.isBest ? <span className="best">Best</span> : <></>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a className="btn-more-grad" href="#">
          {t('homepage.more')}
          </a>

          {ads
            .filter((cat) => cat.category_id === 4)
            .map((item) => (
              <div
                key={item.id}
                className="home-top__right-reklam-block rekl-gradient mb-0 mt-5"
              >
                <a href={item.ads_url}>
                  <img src={`${IMG_URL}/${item.file}`} alt="" />
                </a>
              </div>
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BrokersRaiting;
