import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../Layout";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../../HHTP/clients";
import MyLink from "../../../Common/MyLink";
import { useTranslation } from "react-i18next";

const ComplaintsSingle = ({ id }) => {
  const [reportDetail, setReportDetail] = useState([]);
  const {t} =useTranslation()
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/reports/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data.filter((item) => item.id == id)[0]);
        setReportDetail(res.data.filter((item) => item.id == id)[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="broker__complaints-single">
        <ul id="breadcrumb">
          <span>
            <span>
            <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <MyLink to="/complaints">{t('complaints.title')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                Binance
              </span>
            </span>
          </span>
        </ul>

        <div className="brokers-single__top ">
          <div className="brokers-single__top-left">
            <div className="brokers-single__top-left-logo">
              <img src={`${IMG_URL}media/${reportDetail.logo}`} alt="" />
            </div>
            <div className="brokers-single__top-left-cont">
              <div className="brokers-single__top-left-cont-top">
                <h4>{reportDetail.brokerName}</h4>
                {/* <p>Последный визит: 3 дняназад</p> */}
              </div>
              <div className="brokers-single__top-left-cont-bot">
                {/* <div className="item">
                  <h5>4.58</h5>
                  <p>10.3K</p>
                </div>
                <div className="item">
                  <div className="box">
                    <img src="/images/Brokers/yel-star.svg" alt="" />
                    <img src="/images/Brokers/yel-star.svg" alt="" />
                    <img src="/images/Brokers/yel-star.svg" alt="" />
                    <img src="/images/Brokers/yel-star.svg" alt="" />
                    <img src="/images/Brokers/yel-star.svg" alt="" />
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
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="broker__complaints">
          <div className="broker__complaints-cards">
            <div className="broker__complaints-card">
              <div className="broker__complaints-card--top">
              <img src={`${IMG_URL}media/${reportDetail.avatar}`} alt="" />
                <div className="broker__complaints-card--top-title">
                  <div>
                    <h3>Я броккер</h3>
                    {/* <span>30 дней назад</span> */}
                  </div>
                  <a href={`mailto:${reportDetail.email}`}>
                    {reportDetail.email}
                  </a>
                </div>
              </div>
              <div className="broker__complaints-card--bottom">
                <a href={reportDetail.url}>{reportDetail.url}</a>
                <img className="mb-3" src={`${IMG_URL}media/${reportDetail.logo}`} alt="" />
                <p>{reportDetail.situation_description}</p>
              </div>
            </div>
          </div>
        </div>

        <a className="btn-more-blue" href="#">
        <span>{t('homepage.more')}</span>
        </a>

      </div>
    </DashboardLayout>
  );
};

export default ComplaintsSingle;
