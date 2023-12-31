import React, {useEffect, useState} from "react";
import DashboardLayout from "../../Layout";
import axios from "axios";
import MyLink from "../../Common/MyLink";
import {API_URL, IMG_URL} from "../../../HHTP/clients";
import {useTranslation} from "react-i18next";

const BrokersSingle = ({id}) => {
    const [brokerDetail, setBrokerDetail] = useState([]);
    const [ads, setAds] = useState([]);
    const {t, i18n} = useTranslation();
    const currentLang = i18n.language;

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
        if (id) {
            axios({
                method: "get",
                url: `${API_URL}/brokers/${id}/`,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
                .then((res) => {
                    console.log(res);
                    setBrokerDetail(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [id]);

    return (
        <DashboardLayout>
            {brokerDetail.map((detail) => (
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
                                <img src={`${IMG_URL}/media/${detail.file}`}/>
                            </div>
                            <div className="brokers-single__top-left-cont">
                                <div className="brokers-single__top-left-cont-top">
                                    <h4>{detail.name}</h4>
                                    {/* <p>Последный визит: 3 дня назад</p> */}
                                </div>
                                <div className="brokers-single__top-left-cont-bot">
                                    <div className="item">
                                        {/* <h5>4.58</h5> */}
                                        {/* <p>10.3K</p> */}
                                    </div>
                                    <div className="item">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <span
                                                key={value}
                                                // onClick={() => handleStarClick(value)}
                                                style={{
                                                    cursor: "pointer",
                                                    color: value <= detail.stars_count ? "gold" : "gray",
                                                }}
                                            >
                          ★
                        </span>
                                        ))}
                                        <p>{t('brokers.reyting')}</p>
                                    </div>
                                    <div className="item">
                                        <h5>{detail.reviews_count}</h5>
                                        <p>{t('brokers.reviews')}</p>
                                    </div>
                                    {/* <div className="item">
                    <h5>6K</h5>
                    <p>{t('brokers.subscribes')}</p>
                  </div> */}
                                </div>
                            </div>
                        </div>

                        {/* <div className="brokers-single__top-right">
              <a className="mail" href="#">
                <img src="/images/Icons/mail.svg" alt="" />
              </a>
              <a className="gray-btn" href="#">
              {t('brokers.subs')}
              </a>
              <a className="orange-btn" href="#">
              {t('brokers.treyd')}
              </a>
            </div> */}
                    </div>

                    <div className="brokers-single-review">
                        <div className="brokers-single-review-item">
                            <div
                                dangerouslySetInnerHTML={{__html: currentLang === "en" ? detail.short_description_en : detail.short_description_ru}}
                            ></div>
                        </div>
                        <div className="brokers-single-review-item">
                            <div
                                dangerouslySetInnerHTML={{__html: currentLang === "en" ? detail.full_description_en : detail.full_description_ru}}
                            ></div>
                        </div>
                    </div>

                    {ads
                        .filter((cat) => cat.category_id === 4)
                        .map((item) => (
                            <div
                                key={item.id}
                                className="home-top__right-reklam-block rekl-gradient mb-0"
                            >
                                <a href={item.ads_url}>
                                    <img src={`${IMG_URL}/${item.file}`} alt=""/>
                                </a>
                            </div>
                        ))}
                </div>
            ))}
        </DashboardLayout>
    );
};

export default BrokersSingle;
