import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { useTranslation } from "react-i18next";
import MyLink from "../../Common/MyLink";

const Calendar = () => {
  const [ads, setAds] = useState([]);
  const { t } = useTranslation();

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

  return (
    <DashboardLayout>
      <div className="calendar">
        <ul id="breadcrumb">
          <span>
            <span>
            <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t('calendar.title')}
              </span>
            </span>
          </span>
        </ul>

        {/* <a href="#" className="glow-on-hover mb-4">
          Как оставить отзыв — узнать большее
          <img src="/images/Icons/ArrowRight.svg" alt="" />
        </a> */}

        <h1>{t('calendar.title')}</h1>

        <div className="calendar__filters">
          <div className="sel-box sel-one">
            <select>
              <option value="all" className="bg-opt">
              {t('calendar.filter')}
              </option>
              <option value="curr" className="bg-opt">
              {t('calendar.filter')}-2
              </option>
              <option value="crypto" className="bg-opt">
              {t('calendar.filter')}-3
              </option>
            </select>
          </div>

          <div className="sel-box sel-two">
            <select>
              <option value="all" className="bg-opt">
                21:15:16 (GMT + 3:00)
              </option>
              <option value="curr" className="bg-opt">
                23:15:16 (STV + 5:00)
              </option>
              <option value="crypto" className="bg-opt">
                02:15:16 (AV + 8:00)
              </option>
            </select>
          </div>
        </div>

        <div className="calendar__box">
          <div className="calendar__item">
            <div className="calendar__item-date">
              <p>30 Май</p>
              <p>Вторник</p>
            </div>

            <div className="calendar__item-event">
              <div className="calendar__item-event-left">
                <p>Выходной</p>
              </div>
              <div className="calendar__item-event-right">
                <img src="/images/Icons/china.png" alt="" />
                <p>Китай - День труда</p>
              </div>
            </div>

            <div className="calendar__item-cont">
              <div className="calendar__item-cont-left">
                <div className="calendar__item-cont-left-top">
                  <p>04:30</p>
                  <p>CNY</p>
                </div>
                <div className="calendar__item-cont-left-bot">
                  <div className="circle">
                    <img src="/images/Icons/yel-star.svg" alt="" />
                  </div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <img
                    className="flag-min"
                    src="/images/Icons/china.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="calendar__item-cont-right">
                <div className="calendar__item-cont-right-top">
                  <p>Композитный индекс PMI Китая (апр)</p>
                </div>

                <div className="calendar__item-cont-right-bot">
                  <div className="calendar__item-cont-right-bot-item">
                    <p>Факт:</p>
                    <span>54,4</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Прог:</p>
                    <span>0</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Пред:</p>
                    <span>57,0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="calendar__item-cont">
              <div className="calendar__item-cont-left">
                <div className="calendar__item-cont-left-top">
                  <p>04:30</p>
                  <p>CNY</p>
                </div>
                <div className="calendar__item-cont-left-bot">
                  <div className="circle">
                    <img src="/images/Icons/yel-star.svg" alt="" />
                  </div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <img
                    className="flag-min"
                    src="/images/Icons/china.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="calendar__item-cont-right">
                <div className="calendar__item-cont-right-top">
                  <p>Композитный индекс PMI Китая (апр)</p>
                </div>

                <div className="calendar__item-cont-right-bot">
                  <div className="calendar__item-cont-right-bot-item">
                    <p>Факт:</p>
                    <span>54,4</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Прог:</p>
                    <span>0</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Пред:</p>
                    <span>57,0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="calendar__item-cont">
              <div className="calendar__item-cont-left">
                <div className="calendar__item-cont-left-top">
                  <p>04:30</p>
                  <p>CNY</p>
                </div>
                <div className="calendar__item-cont-left-bot">
                  <div className="circle">
                    <img src="/images/Icons/yel-star.svg" alt="" />
                  </div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <img
                    className="flag-min"
                    src="/images/Icons/china.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="calendar__item-cont-right">
                <div className="calendar__item-cont-right-top">
                  <p>Композитный индекс PMI Китая (апр)</p>
                </div>

                <div className="calendar__item-cont-right-bot">
                  <div className="calendar__item-cont-right-bot-item">
                    <p>Факт:</p>
                    <span>54,4</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Прог:</p>
                    <span>0</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Пред:</p>
                    <span>57,0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="calendar__item">
            <div className="calendar__item-date">
              <p>30 Май</p>
              <p>Вторник</p>
            </div>

            <div className="calendar__item-event">
              <div className="calendar__item-event-left">
                <p>Выходной</p>
              </div>
              <div className="calendar__item-event-right">
                <img src="/images/Icons/germany.png" alt="" />
                <p>Германия - День труда</p>
              </div>
            </div>

            <div className="calendar__item-cont calendar__item-cont-empty">
              <div className="calendar__item-cont-left">
                <h4>04:30</h4>
              </div>
              <div className="calendar__item-cont-right">
                <img src="/images/Icons/germany.png" alt="" />
                <p>Германия - День труда</p>
              </div>
            </div>

            <div className="calendar__item-cont calendar__item-cont-empty">
              <div className="calendar__item-cont-left">
                <h4>04:30</h4>
              </div>
              <div className="calendar__item-cont-right">
                <img src="/images/Icons/germany.png" alt="" />
                <p>Германия - День труда</p>
              </div>
            </div>

            <div className="calendar__item-cont calendar__item-cont-empty">
              <div className="calendar__item-cont-left">
                <h4>04:30</h4>
              </div>
              <div className="calendar__item-cont-right">
                <img src="/images/Icons/germany.png" alt="" />
                <p>Германия - День труда</p>
              </div>
            </div>
          </div>
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

export default Calendar;
