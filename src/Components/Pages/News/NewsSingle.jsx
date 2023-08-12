import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import moment from "moment/moment";
import { useTranslation } from "react-i18next";
import MyLink from "../../Common/MyLink";

const NewsSingle = ({ id }) => {
  const [news, setNews] = useState([]);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/news/${id}/`,
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
      <div className="news-single">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t("header.navbar.home")}</MyLink>|
              <MyLink to="/news">{t("news.title")}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t("news.single")}
              </span>
            </span>
          </span>
        </ul>

        {news.map((item) => (
          <div key={item.id}>
            <div className="news-single__top">
              <h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      currentLang === "en"
                        ? item.short_description_en
                        : item.short_description_ru,
                  }}
                ></div>
              </h1>
              <p>
                <p>{moment(item.created_at).format("DD.MM.YYYY HH:mm")}</p>
              </p>
            </div>
            <div className="main-image mb-5">
            <img src={`${IMG_URL}/${item.file}`} style={{height:"380px", objectFit:"cover"}} alt="" />
            </div>
            <div className="news-single__cont">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    currentLang === "en"
                      ? item.full_description_en
                      : item.full_description_ru,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default NewsSingle;
