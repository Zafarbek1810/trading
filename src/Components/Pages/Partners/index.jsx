import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { useTranslation } from "react-i18next";
import MyLink from "../../Common/MyLink";

const Partners = () => {
  const [partner, setPartners] = useState([]);
  const [ads, setAds] = useState([]);
  const {t, i18n}=useTranslation();

  const currentLang = i18n.language;

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/partners/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setPartners(res.data);
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

  const toggleBtn = () => {
      const full_descr = document.querySelector('.full-descr');
      const btn = document.querySelector('.btn');

      full_descr.style.display === 'none' ? full_descr.style.display = 'block' : full_descr.style.display = 'none'
      full_descr.style.transition = 'display 0.5s ease-in-out'
      btn.style.transform === 'rotate(180deg)' ? btn.style.transform = 'rotate(0deg)' : btn.style.transform = 'rotate(180deg)'
  };

  return (
    <DashboardLayout>
      <div className="partners">
        <ul id="breadcrumb">
          <span>
            <span>
            <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t('partners.title')}
              </span>
            </span>
          </span>
        </ul>

        <div className="partners__top">
          <h1>{t('partners.title')}</h1>
          {/* <p>{t('partners.descr')}</p> */}
        </div>

        <div className="partners__box">
          {partner.map((item, index) => (
            <div key={index} className="partners__item">
              <div key={index} className="partners__item-img-box">
                <img src={`${IMG_URL}media/${item.file}`} alt="" />
              </div>
              <div className="partners__item-cont">
                <h5>{item.name}</h5>
                <p className="partners-text">{currentLang==='en' ? item.short_description_en : item.short_description_ru}</p>
                <div className="full-descr"
                dangerouslySetInnerHTML={{
                  __html:
                    currentLang === "en"
                      ? item.full_description_en
                      : item.full_description_ru,
                }}
              ></div>
                <div className="btn" onClick={toggleBtn}>
                  <img src="/images/Partners/arr-down.svg" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </DashboardLayout>
  );
};

export default Partners;
