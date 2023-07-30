import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { useTranslation } from "react-i18next";
import MyLink from "../../Common/MyLink";

const Footer = () => {
  const [ads, setAds] = useState([]);
  const [tglink, setTglink] = useState({});
  const { t } = useTranslation()
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
        url: `${API_URL}/tglink/`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => {
          console.log(res.data);
          setTglink(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  return (
    <>
      <div className="footer">
        <div className="footer__top-sec">
          <div className="container">
            <div className="footer__top">
              <div className="footer__top-left">
                <MyLink className="footer__top-left-logo" to="/">
                  <img src="/images/Icons/footer-logo-333.svg" alt="" />
                </MyLink>
              </div>
              <div className="footer__top-right">
                <div className="footer__top-right-contact">
                  <a href="#"> info@gmail.com </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__center-sec">
          <div className="container">
            <div className="footer__center">
              <a className="tg-btn" href={tglink.link}>
                <img src="/images/Icons/soc-tg.svg" alt="" />
                {t('footer.telegram')}
              </a>
              <ul>
                <li>
                  <a href="#">{t('footer.news')} </a>
                </li>
                <li>
                  <a href="#">{t('footer.house')} </a>
                </li>
                <li>
                  <a href="#">{t('footer.web')} </a>
                </li>
                <li>
                  <a href="#">{t('footer.broker')} </a>
                </li>
                <li>
                  <a href="#"> {t('footer.ads')} </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom-sec">
          <div className="container">
            <div className="footer__bottom">
              <a href="#">{t('footer.policy')}</a>
              <a href="#"> {t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
      {ads
        .filter((cat) => cat.category_id === 5)
        .map((item) => (
          <div key={item.id} className="reklam-popup">
            <div className="reklam-popup__body">
              <button id="popup-btn-close">
                <img src="/images/Icons/close-circle-fill2.svg" alt="" />
              </button>
              <MyLink href={item.ads_url}>
                <img src={`${IMG_URL}/${item.file}`} alt="" />
              </MyLink>
            </div>
          </div>
        ))}
    </>
  );
};

export default Footer;
