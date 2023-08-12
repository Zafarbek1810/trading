import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { useTranslation } from "react-i18next";

const Complaints = () => {
  const [report, setReport] = useState([]);
  const [ads, setAds] = useState([]);
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
      url: `${API_URL}/reports/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setReport(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <DashboardLayout>
      <div className="brokers-single">
        <ul id="breadcrumb">
          <span>
            <span>
            <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
              {t('complaints.title')}
              </span>
            </span>
          </span>
        </ul>

        <div className="complaints__all">
          <div className="complaints__all-title">
            <div className="complaints__title">
              <h1>{t('complaints.title')}</h1>
              <h2>
              {t('complaints.descr')}
              </h2>
            </div>
            <MyLink to="/complaints-form">{t('complaints.btn')}</MyLink>
          </div>

          <div className="complaints__all-cards">
            {report.map((item) => (
              <MyLink
                key={item.id}
                to={`/complaints-single?id=${item.id}`}
                className="complaints__card"
              >
                {/* <span>добавлена 6 мин. назад </span> */}
                <div className="complaints__card-items">
                  <div className="card__broker-img">
                    <div className="right_img">
                      <img src={`${IMG_URL}/media/${item.logo}`} />
                    </div>
                  </div>
                  <div className="complaints__card-text">
                    <h2>{item.brokerName}</h2>
                    <div className="number-complaints">
                      {/* <img src="/images/Icons/UsersThree.png" alt="" /> */}
                      {/* <span>{t('complaints.numberComplaint')} (11)</span> */}
                    </div>
                    <div className="arr">
                      <img src="/images/Icons/arr-right.svg" alt="" />
                    </div>
                  </div>
                </div>
              </MyLink>
            ))}
          </div>

          <a className="btn-more-complaints" href="#">
          <span>{t('homepage.more')}</span>
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

export default Complaints;
