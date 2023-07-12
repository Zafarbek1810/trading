import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import { API_URL } from "../../../HHTP/clients";

const Brokers = () => {
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

  return (
    <DashboardLayout>
      <div className="brokers">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">Главная</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                Брокеры
              </span>
            </span>
          </span>
        </ul>

        <a href="#" className="glow-on-hover mb-4">
          Как оставить отзыв — узнать большее
          <img src="/images/Icons/ArrowRight.svg" alt="" />
        </a>

        <div className="brokers-top">
          <h1>Проверенные и надежные брокеры</h1>
          <p>
            Risk more than others think is safe. Dream more than others think is
            practical. Risk more than others think is safe. Dream more than
            others think is practical.
          </p>
          <div className="brokers-top__box">
            <div className="brokers-top__box-item">
              <h6>Надежные брокеры</h6>
              <h5>16672</h5>
            </div>

            <div className="brokers-top__box-item">
              <h6>Отзывы людей</h6>
              <h5>81724134</h5>
            </div>
          </div>
        </div>

        <div className="brokers-list">
          <div className="brokers-list__top">
            <div className="sel-box">
              <select id="brokers-select">
                <option value="all" className="bg-opt">
                  Все
                </option>
                <option value="best" className="bg-opt">
                  Высокий рейтинг
                </option>
                <option value="average" className="bg-opt">
                  Средний рейтинг
                </option>
                <option value="worst" className="bg-opt">
                  Низкий рейтинг
                </option>
              </select>
            </div>
            <a className="active" href="#" data-filter="all">
              Все броккеры
            </a>
            <a href="#" data-filter="forex">
              Forex
            </a>
            <a href="#" data-filter="crypto">
              Crypto
            </a>
          </div>

          <div className="brokers-list__box">
            {brokers.map((broker) => (
            <div key={broker.id} className="brokers-list__item" data-cat="forex">
              <div className="brokers-list__item-left">
                <h3>{broker.name}</h3>

                <div className="brokers-list__item-left-estimates">
                  <div className="brokers-list__item-left-estimates-left">
                    <div className="brokers-list__item-left-estimates-left-top">
                      <span data-est="">5</span>
                      <h5>Высокий</h5>
                      <img src="/images/Icons/Frame.svg" alt="" />
                    </div>
                    <div className="brokers-list__item-left-estimates-left-bot">
                      <img src="/images/Icons/star-icon.svg" alt="" />
                      <img src="/images/Icons/star-icon.svg" alt="" />
                      <img src="/images/Icons/star-icon.svg" alt="" />
                      <img src="/images/Icons/star-icon.svg" alt="" />
                      <img src="/images/Icons/star-icon.svg" alt="" />
                    </div>
                  </div>

                  <div className="brokers-list__item-left-estimates-center">
                    <div className="brokers-list__item-left-estimates-center-top">
                      <img src="/images/Icons/reviews.svg" alt="" />
                      <h5>12.1K</h5>
                    </div>
                    <div className="brokers-list__item-left-estimates-center-bot">
                      <p>Отзывы</p>
                    </div>
                  </div>

                  <div className="brokers-list__item-left-estimates-right">
                    <div className="brokers-list__item-left-estimates-right-top">
                      <img src="/images/Icons/acc.svg" alt="" />
                      <h5>104.9K</h5>
                    </div>
                    <div className="brokers-list__item-left-estimates-right-bot">
                      <p>Счета</p>
                    </div>
                  </div>
                </div>

                <div className="brokers-list__item-left-assets">
                  <div className="brokers-list__item-left-assets-item">
                    <h6>786+</h6>
                    <p>Торг. активы:</p>
                  </div>
                  <div className="brokers-list__item-left-assets-item">
                    <h6>250+</h6>
                    <p>Мин.влад</p>
                  </div>
                  <div className="brokers-list__item-left-assets-item">
                    <h6>347+</h6>
                    <p>Моб.приложение</p>
                  </div>
                </div>

                <div className="brokers-list__item-left-text">
                  <div className="top">
                  <div dangerouslySetInnerHTML={{__html: broker.short_description}} />
                  </div>
                </div>

                <div className="brokers-list__item-left-btns">
                  <a className="orange-btn" href={broker.url}>
                    Открыть сайт
                  </a>
                  <MyLink className="gray-btn" to={`/brokers-single?id=${broker.id}`}>
                    {broker.name} обзор
                  </MyLink>
                </div>
              </div>

              <div className="brokers-list__item-right">
                <div className="brokers-list__item-right-img-wrap">
                  <img src={`${API_URL}/media/${broker.file}`} />
                </div>
              </div>
            </div>
            ))}

          </div>

          <a className="btn-more-grad" href="#">
            <span>Загрузить еще</span>
          </a>
        </div>

        <div className="home-top__right-reklam-block rekl-gradient mb-0 mt-5">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Brokers;
