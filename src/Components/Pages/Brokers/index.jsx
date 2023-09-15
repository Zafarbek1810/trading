import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { Alert, Modal, Rate } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Brokers = () => {
  const [brokers, setBrokers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rate, setRate] = useState(0);
  const [brokerId, setBrokerId] = useState(0);
  const [gmail, setGmail] = useState("");
  const { register, handleSubmit, setValue, control, reset } = useForm();
  const [ads, setAds] = useState([]);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;
  const [tft, setTft] = useState([]);
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
      url: `${API_URL}/brokers/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setBrokers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleRate = (v, id) => {
    console.log(v, id);
    setRate(v);
    setBrokerId(id);
    axios({
      method: "post",
      url: `${API_URL}/brokers/report/`,
      data: {
        broker_id: id,
        rating: v,
        // toEmail: values.gmail,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        Alert.success("Success");
      })
      .catch((err) => {
        console.log(err);
      });
    showModal();
  };

  const changeInput = (e) => {
    setGmail(e.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onSubmit = (values) => {
    console.log(values);
    setIsModalOpen(false);
    axios({
      method: "post",
      url: `${API_URL}/brokers/report/`,
      data: {
        broker_id: brokerId,
        rating: rate,
        // toEmail: values.gmail,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        Alert.success("Success");
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
  };

  return (
    <DashboardLayout>
      <div className="brokers">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
              {t('header.navbar.broker')}
              </span>
            </span>
          </span>
        </ul>

        <div className="rating">
          <div className="brokers-list__box">
          <div className="rating__content-box">
            {brokers.map((item) => (
              <div key={item.id} className="rating__content-item">
                <div className="rating__content-item-left">
                  {/* <span className="top-num">№{item.topNumber}</span> */}
                  <div className="rating__content-item-left-top">
                    <h3>{item.name}</h3>
                    {item.isTrusted === "1" ? (
                      <span></span>
                    ) : item.isTrusted === "0" ? (
                      <span className="red">{t("homepage.nocanTrust")}</span>
                    ) : (
                      <span className="green">{t("homepage.canTrust")}</span>
                    )}
                    
                  </div>

                  <h4>
                    {t("homepage.toolsTrading")}{" "}
                    <span className="m-3">
                      {tft
                        .filter((pro) => pro.id === item.tools_id)
                        .map((obj) => {
                          return obj.title;
                        })}
                    </span>
                  </h4>

                  <div className="rating__content-item-left-bot">
                    <div className="est">
                      <p>{item.stars_count}.0 
                      {
                        item.stars_count === 1 ? t("homepage.yomon") : 
                        ((item.stars_count===2 || item.stars_count===3) ? t("homepage.ortacha") : 
                        (item.stars_count===4 ? t("homepage.yaxshi") : t("homepage.perfect"))) 
                      }
                      </p>
                      {[1, 2, 3, 4, 5].map((value) => (
                        <span
                          key={value}
                          // onClick={() => handleStarClick(value)}
                          style={{
                            cursor: "pointer",
                            color: value <= item.stars_count ? "gold" : "gray",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <div className="rev">
                      <div className="box">
                        <img src="/images/Icons/reviews.svg" alt="" />
                        <p>{item.reviews_count}</p>
                      </div>
                      <p>{t("homepage.reviews")}</p>
                    </div>

                    <div className="acc">
                      <div className="box">
                        <img src="/images/Icons/acc.svg" alt="" />
                        <p>{item.balance}</p>
                      </div>
                      <p>{t("homepage.acc")}</p>
                    </div>

                    {item.isChecked ? (
                      <div className="check">
                        <img src="/images/Icons/Frame.svg" alt="" />
                        <p>{t("homepage.checked")}</p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="brokers-list__item-left-text">
                    <div className="top">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: currentLang === "ru" ? item.short_description_ru : item.short_description_en,
                        }}
                      />
                    </div>
                  </div>

                  <div className="brokers-list__item-left-btns">
                    <a className="orange-btn" href={item.url}>
                    {t('brokers.site')}
                    </a>
                    <MyLink
                      className="gray-btn"
                      to={`/brokers-single?id=${item.id}`}
                    >
                      {item.name} {t('brokers.obzor')}
                    </MyLink>
                  </div>
                </div>

                <div className="rating__content-item-right">
                  <div className="img-box">
                    <img src={`${IMG_URL}/media/${item.file}`} />
                    {item.isBest === "1" ? (
                      <span></span>
                    ) : item.isBest === "0" ? (
                      <span className="scam">Scam</span>
                    ) : (
                      <span className="best">Best</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
            {/* {brokers.map((broker) => (
              <div
                key={broker.id}
                className="brokers-list__item"
                data-cat="forex"
              >
                <div className="brokers-list__item-left"  style={{width:"70%"}}>
                <span className="top-num">№{broker.topNumber}</span>
                  <div className="rating__content-item-left-top">
                    <h3>{broker.name}</h3>
                    {broker.isTrusted === "1" ? (
                      <span></span>
                    ) : broker.isTrusted === "0" ? (
                      <span className="red">{t("homepage.nocanTrust")}</span>
                    ) : (
                      <span className="green">{t("homepage.canTrust")}</span>
                    )}
                  </div>
                  <h4>
                    {t("homepage.toolsTrading")}
                    <span className="ms-3">
                      {tft
                        .filter((pro) => pro.id === broker.tools_id)
                        .map((obj) => {
                          return obj.title;
                        })}
                    </span>
                  </h4>

                  <div className="brokers-list__item-left-estimates">
                    <div className="brokers-list__item-left-estimates-left">
                      <div className="brokers-list__item-left-estimates-left-top">
                        <span data-est="">{broker.stars_count}.0  {
                        broker.stars_count === 1 ? t("homepage.yomon") : 
                        ((broker.stars_count===2 || broker.stars_count===3) ? t("homepage.ortacha") : 
                        (broker.stars_count===4 ? t("homepage.yaxshi") : t("homepage.perfect"))) 
                      }</span>
                        <img src="/images/Icons/Frame.svg" alt="" />
                      </div>
                      <div className="brokers-list__item-left-estimates-left-bot">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <span
                          key={value}
                          // onClick={() => handleStarClick(value)}
                          style={{
                            cursor: "pointer",
                            color: value <= broker.stars_count ? "gold" : "gray",
                          }}
                        >
                          ★
                        </span>
                      ))}
                      </div>
                    </div>

                    <div className="brokers-list__item-left-estimates-center">
                      <div className="brokers-list__item-left-estimates-center-top">
                        <img src="/images/Icons/reviews.svg" alt="" />
                        <h5>{broker.reviews_count}</h5>
                      </div>
                      <div className="brokers-list__item-left-estimates-center-bot">
                        <p>{t('brokers.reviews')}</p>
                      </div>
                    </div>

                    <div className="brokers-list__item-left-estimates-right">
                      <div className="brokers-list__item-left-estimates-right-top">
                        <img src="/images/Icons/acc.svg" alt="" />
                        <h5>{broker.balance}</h5>
                      </div>
                      <div className="brokers-list__item-left-estimates-right-bot">
                        <p>{t('brokers.acc')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="brokers-list__item-left-text">
                    <div className="top">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: currentLang === "ru" ? broker.short_description_ru : broker.short_description_en,
                        }}
                      />
                    </div>
                  </div>

                  <div className="brokers-list__item-left-btns">
                    <a className="orange-btn" href={broker.url}>
                    {t('brokers.site')}
                    </a>
                    <MyLink
                      className="gray-btn"
                      to={`/brokers-single?id=${broker.id}`}
                    >
                      {broker.name} {t('brokers.obzor')}
                    </MyLink>
                  </div>
                </div>

                <div className="brokers-list__item-right">
                  <div className="brokers-list__item-right-img-wrap">
                    <img src={`${IMG_URL}/media/${broker.file}`} />
                  </div>
                </div>
              </div>
            ))} */}
          </div>

          <a className="btn-more-grad" href="#">
            <span>{t('homepage.more')}</span>
          </a>
        </div>

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
    </DashboardLayout>
  );
};

export default Brokers;
