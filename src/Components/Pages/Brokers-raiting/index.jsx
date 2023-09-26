import React, {useEffect, useState} from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import {API_URL, IMG_URL} from "../../../HHTP/clients";
import Rating from "./Rating";
import {useTranslation} from "react-i18next";

const BrokersRaiting = () => {
    const [brokers, setBrokers] = useState([]);
    const [brokerRating, setBrokerRating] = useState([]);
    const [tft, setTft] = useState([]);
    const [ads, setAds] = useState([]);
    const [rating, setRating] = useState(0); // Initial rating is 0
    const {t} = useTranslation();

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
                console.log(res.data, "brokers");
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


    return (
        <DashboardLayout>
            <div className="rating">
                <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t("header.navbar.home")}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t("sidebar.brokers-raiting")}
              </span>
            </span>
          </span>
                </ul>

                <div className="rating__top">
                    <h1>{t("sidebar.brokers-raiting")}</h1>
                    <p>{t("brokerRaiting.descr1")}</p>
                </div>

                <div className="rating__content">
                    <p className="rating__content-text">{t("brokerRaiting.descr2")}</p>

                    <div className="rating__content-box">
                        {brokers.map((item) => (
                            <div key={item.id} className="rating__content-item">
                                <div className="rating__content-item-left">
                                    <span className="top-num">№{item.topNumber}</span>
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
                                                        ((item.stars_count === 2 || item.stars_count === 3) ? t("homepage.ortacha") :
                                                            (item.stars_count === 4 ? t("homepage.yaxshi") : t("homepage.perfect")))
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
                                                <img src="/images/Icons/reviews.svg" alt=""/>
                                                <p>{item.reviews_count}</p>
                                            </div>
                                            <p>{t("homepage.reviews")}</p>
                                        </div>

                                        <div className="acc">
                                            <div className="box">
                                                <img src="/images/Icons/acc.svg" alt=""/>
                                                <p>{item.balance}</p>
                                            </div>
                                            <p>{t("homepage.acc")}</p>
                                        </div>

                                        {item.isChecked ? (
                                            <div className="check">
                                                <img src="/images/Icons/Frame.svg" alt=""/>
                                                <p>{t("homepage.checked")}</p>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </div>

                                    <MyLink
                                        className="gray-btn"
                                        to={`/brokers/rating/${item.id}`}
                                    >
                                        {t("homepage.learnMore")}
                                    </MyLink>
                                </div>

                                <div className="rating__content-item-right">
                                    <div className="img-box">
                                        <img src={`${IMG_URL}/media/${item.file}`}/>
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

                    <a className="btn-more" href="#">
                        <span>{t("homepage.more")}</span>
                    </a>

                    {ads
                        .filter((cat) => cat.category_id === 4)
                        .map((item) => (
                            <div
                                key={item.id}
                                className="home-top__right-reklam-block rekl-gradient mb-0 mt-5"
                            >
                                <a href={item.ads_url}>
                                    <img src={`${IMG_URL}/${item.file}`} alt=""/>
                                </a>
                            </div>
                        ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default BrokersRaiting;
