import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { useTranslation } from "react-i18next";
import moment from "moment/moment";

const News = () => {
  const [news, setNews] = useState([]);
  const [ads, setAds] = useState([]);
  const {t, i18n} = useTranslation()

  const currentLang = i18n.language

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
      url: `${API_URL}/news/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="news">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
              {t('news.title')}
              </span>
            </span>
          </span>
        </ul>

        <div className="news__top">
          <h1>{t('news.title')}</h1>
          <p>{t('news.descr')}</p>
        </div>

        <div className="news__box">
          {news.map((item) => (
            <MyLink
              key={item.id}
              to={`/news-single?id=${item.id}`}
              className="news__item"
            >
              <div className="news__item-top">
                <p>{moment(item.created_at).format("MMM MM / YYYY")}</p>
                <h6>{item.category_id===1 && (currentLang==='en' ? "News" : "Новости")}</h6>
              </div>
              <div className="news__item-center">
                <img src={`${IMG_URL}/${item.file}`} style={{height:"300px", objectFit:"cover"}} alt="" />
              </div>
              <div className="news__item-bot">
                <p>{currentLang==="en" ? item.short_description_en : item.short_description_ru}</p>
              </div>
            </MyLink>
          ))}
        </div>

        <a className="btn-more" href="#">
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
    </DashboardLayout>
  );
};

export default News;
