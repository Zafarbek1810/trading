import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import axios from "axios";
import MyLink from "../../Common/MyLink";
import { API_URL } from "../../../HHTP/clients";

const BrokersSingle = ({ id }) => {
  const [brokerDetail, setBrokerDetail] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}api/brokers/${id}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setBrokerDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardLayout>
      {brokerDetail.map((detail) => (
        <div className="brokers-single">
          <ul id="breadcrumb">
            <span>
              <span>
                <MyLink to="/">Главная</MyLink>|<MyLink to="/brokers">Брокеры</MyLink>|
                <span className="breadcrumb_last" aria-current="page">
                  {detail.name}
                </span>
              </span>
            </span>
          </ul>

          <div className="brokers-single__top">
            <div className="brokers-single__top-left">
              <div className="brokers-single__top-left-logo">
                <img src="/images/Brokers/Binance.png" alt="" />
              </div>
              <div className="brokers-single__top-left-cont">
                <div className="brokers-single__top-left-cont-top">
                  <h4>{detail.name}</h4>
                  <p>Последный визит: 3 дня назад</p> 
                </div>
                <div className="brokers-single__top-left-cont-bot">
                  <div className="item">
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
                    <p>Рейтинги</p>
                  </div>
                  <div className="item">
                    <h5>114.K</h5>
                    <p>Traders</p>
                  </div>
                  <div className="item">
                    <h5>6K</h5>
                    <p>Подписчики</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="brokers-single__top-right">
              <a className="mail" href="#">
                <img src="/images/Icons/mail.svg" alt="" />
              </a>
              <a className="gray-btn" href="#">
                Подписатся
              </a>
              <a className="orange-btn" href="#">
                Трейдинг
              </a>
            </div>
          </div>

          <div className="brokers-single-review">
            <div className="brokers-single-review-item">
              <div  dangerouslySetInnerHTML={{__html: detail.short_description}}></div>
            </div>
            <div className="brokers-single-review-item">
              <div  dangerouslySetInnerHTML={{__html: detail.full_description}}></div>
            </div>

            {/* <div className="brokers-single-review-item">
            <h5>Fees</h5>
            <ul>
              <li>
                Fees as low as 0.02% on Spot, and 0.01% on Futures Liquidity
                providers can enjoy up to 0.01% on Spot and 0.05% rebate on
                Futures No hidden fees or spreads
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                perspiciatis esse quia
              </li>
            </ul>
          </div>

          <div className="brokers-single-review-item">
            <h5>About</h5>
            <p>
              Binance.com is the largest cryptocurrency exchange in the world,
              serving users from more than 180 countries and regions, with an
              average daily transaction volume of more than 65 billion US
              dollars. Trusted by millions of users around the world, Binance
              features an unmatched portfolio of financial product offerings.
              This includes spot and margin trading, contract and options
              trading, staking services, support for fiat currency channels, and
              more.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              animi.
            </p>
          </div>

          <div className="brokers-single-review-item">
            <h5>Contacts</h5>
            <ul>
              <li>
                <a href="#">www.binance.com</a>
              </li>
              <li>
                <a href="#">t.me@binance</a>
              </li>
            </ul>
          </div>

          <div className="brokers-single-review-item">
            <h4>The magic of software</h4>
            <p>
              Computers used to be magical. But much of that magic has been lost
              over time, replaced by subpar tools and practices that slow teams
              down and hold great work back.
            </p>
            <p>
              Frustrated with building and managing software projects in
              high-growth companies ourselves, we founded a company to build
              something better.
            </p>
            <p>We named it Linear to signify progress.</p>
            <a className="brokers-single-review-btn" href="#">
              Read more about how we think and work <span>→</span>
            </a>
          </div> */}
          </div>

          <div className="home-top__right-reklam-block rekl-gradient mt-5">
            <img src="/images/Home-page/333.gif" alt="" />
          </div>
        </div>
      ))}
    </DashboardLayout>
  );
};

export default BrokersSingle;
