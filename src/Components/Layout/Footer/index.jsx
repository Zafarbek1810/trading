import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../HHTP/clients";

const Footer = () => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}api/ads/`,
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
  return (
    <>
      <div className="footer">
        <div className="footer__top-sec">
          <div className="container">
            <div className="footer__top">
              <div className="footer__top-left">
                <a className="footer__top-left-logo" href="#">
                  <img src="/images/Icons/footer-logo-333.svg" alt="" />
                </a>
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
              <a className="tg-btn" href="#">
                <img src="/images/Icons/soc-tg.svg" alt="" />
                Telegram-канал
              </a>
              <ul>
                <li>
                  <a href="#"> News flow </a>
                </li>
                <li>
                  <a href="#"> House rules </a>
                </li>
                <li>
                  <a href="#"> Web site & brokker solution </a>
                </li>
                <li>
                  <a href="#"> Web site & brokker solution </a>
                </li>
                <li>
                  <a href="#"> Брокеры </a>
                </li>
                <li>
                  <a href="#"> Advertising </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom-sec">
          <div className="container">
            <div className="footer__bottom">
              <a href="#"> Pricacy & Policy </a>
              <a href="#"> Terms of Use </a>
            </div>
          </div>
        </div>
      </div>
      {ads
        .filter((cat) => cat.category_id === 5)
        .map((item) => (
          <div className="reklam-popup">
            <div className="reklam-popup__body">
              <button id="popup-btn-close">
                <img src="/images/Icons/close-circle-fill2.svg" alt="" />
              </button>
              <a href={item.ads_url}>
                <img src={`${API_URL}/${item.file}`} alt="" />
              </a>
            </div>
          </div>
        ))}
    </>
  );
};

export default Footer;
