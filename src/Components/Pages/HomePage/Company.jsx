import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../HHTP/clients";
import MyLink from "../../Common/MyLink";

const Company = () => {
  const [ads, setAds] = useState([]);
  const [brokers, setBrokers] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}api/brokers`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setBrokers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
      <div className="company">
        <div className="company__top">
          <h2 style={{ fontWeight: 900 }}>Рейтинг брокеров</h2>
          <h3>
            На нашем сайте мы собрали всю необходимую информацию о торговых
            платформах
          </h3>
        </div>

        <div className="rating">
          <div className="rating__content-box">
            {brokers.map((broker) => (
              <div key={broker.id} className="rating__content-item">
                <div className="rating__content-item-left">
                  <span className="top-num"> №1 </span>
                  <div className="rating__content-item-left-top">
                    <h3>{broker.name}</h3>
                    <span className="green"> Можно доверять </span>
                  </div>

                  <h4>
                    Инструменты для торговли:
                    <span>Криптовалюты</span>
                  </h4>

                  <div className="rating__content-item-left-bot">
                    <div className="est">
                      <p>5.0 ПРЕВОСХОДНО</p>
                      <div className="box">
                        <img src="/images/Icons/star-w.svg" alt="" />
                        <img src="/images/Icons/star-w.svg" alt="" />
                        <img src="/images/Icons/star-w.svg" alt="" />
                        <img src="/images/Icons/star-w.svg" alt="" />
                        <img src="/images/Icons/star-w.svg" alt="" />
                      </div>
                    </div>

                    <div className="rev">
                      <div className="box">
                        <img src="/images/Icons/reviews.svg" alt="" />
                        <p>15,4k</p>
                      </div>
                      <p>Отзывы</p>
                    </div>

                    <div className="acc">
                      <div className="box">
                        <img src="/images/Icons/acc.svg" alt="" />
                        <p>105k</p>
                      </div>
                      <p>Счета</p>
                    </div>

                    <div className="check">
                      <img src="/images/Icons/Frame.svg" alt="" />
                      <p>Проверено</p>
                    </div>
                  </div>
                  <MyLink
                    className="gray-btn"
                    to={`/brokers-single?id=${broker.id}`}
                  >
                    Узнать больше 
                  </MyLink>
                </div>

                <div className="rating__content-item-right">
                  <div className="img-box">
                    <img src={`${API_URL}/media/${broker.file}`} />
                    <span className="best">Best</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a className="btn-more-grad" href="#">
            <span> Смотреть все </span>
          </a>
        </div>
      </div>

      {ads
        .filter((cat) => cat.category_id === 4)
        .map((item) => (
          <div className="home-top__right-reklam-block rekl-gradient">
            <a href={item.ads_url}>
              <img src={`${API_URL}/${item.file}`} alt="" />
            </a>
          </div>
        ))}
    </>
  );
};

export default Company;
