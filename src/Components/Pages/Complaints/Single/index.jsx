import React from "react";
import DashboardLayout from "../../../Layout";

const ComplaintsSingle = () => {
  return (
    <DashboardLayout>
      <div className="broker__complaints-single">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|<a href="#">Брокеры</a>|
              <span className="breadcrumb_last" aria-current="page">
                Binance
              </span>
            </span>
          </span>
        </ul>

        <div className="brokers-single__top ">
          <div className="brokers-single__top-left">
            <div className="brokers-single__top-left-logo">
              <img src="/images/Brokers/Binance.png" alt="" />
            </div>
            <div className="brokers-single__top-left-cont">
              <div className="brokers-single__top-left-cont-top">
                <h4>Binance</h4>
                <p>Последный визит: 3 дняназад</p>
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
        </div>

        <div className="broker__complaints">
          <div className="broker__complaints-cards">
            <div className="broker__complaints-card">
              <div className="broker__complaints-card--top">
                <img src="/images/Ellipse broker-single.jpg" alt="" />
                <div className="broker__complaints-card--top-title">
                  <div>
                    <h3>Я броккер</h3>
                    <span>30 дней назад</span>
                  </div>
                  <a href="mailto:yabrokker@gmail.com">yabrokker@gmail.com</a>
                </div>
              </div>
              <div className="broker__complaints-card--bottom">
                <a href="www.binance.com">www.binance.com</a>
                <a href="/images/Ellipse broker-single.jpg" download="">
                  открыть файл
                </a>
                <p>
                  The dollar index climbed to a peak of 103.70 as short-sellers
                  were caught off guard amid a flurry of events. The dollar
                  index climbed to a peak of 103.70 as short-sellers were caught
                  off guard amid a flurry of events. The dollar index climbed to
                  a peak of 103.70 as short-sellers were caught off guard amid a
                  flurry of events.
                </p>
              </div>
            </div>
            <div className="broker__complaints-card">
              <div className="broker__complaints-card--top">
                <img src="/images/Ellipse broker-single.jpg" alt="" />
                <div className="broker__complaints-card--top-title">
                  <div>
                    <h3>Я броккер</h3>
                    <span>30 дней назад</span>
                  </div>
                  <a href="mailto:yabrokker@gmail.com">yabrokker@gmail.com</a>
                </div>
              </div>
              <div className="broker__complaints-card--bottom">
                <a href="www.binance.com">www.binance.com</a>
                <a href="/images/Ellipse broker-single.jpg" download="">
                  открыть файл
                </a>
                <p>
                  The dollar index climbed to a peak of 103.70 as short-sellers
                  were caught off guard amid a flurry of events. The dollar
                  index climbed to a peak of 103.70 as short-sellers were caught
                  off guard amid a flurry of events. The dollar index climbed to
                  a peak of 103.70 as short-sellers were caught off guard amid a
                  flurry of events.
                </p>
              </div>
            </div>
            <div className="broker__complaints-card">
              <div className="broker__complaints-card--top">
                <img src="/images/Ellipse broker-single.jpg" alt="" />
                <div className="broker__complaints-card--top-title">
                  <div>
                    <h3>Я броккер</h3>
                    <span>30 дней назад</span>
                  </div>
                  <a href="mailto:yabrokker@gmail.com">yabrokker@gmail.com</a>
                </div>
              </div>
              <div className="broker__complaints-card--bottom">
                <a href="www.binance.com">www.binance.com</a>
                <a href="/images/Ellipse broker-single.jpg" download="">
                  открыть файл
                </a>
                <p>
                  The dollar index climbed to a peak of 103.70 as short-sellers
                  were caught off guard amid a flurry of events. The dollar
                  index climbed to a peak of 103.70 as short-sellers were caught
                  off guard amid a flurry of events. The dollar index climbed to
                  a peak of 103.70 as short-sellers were caught off guard amid a
                  flurry of events.
                </p>
              </div>
            </div>
          </div>
        </div>

        <a className="btn-more-blue" href="#">
          <span>Загрузить еще</span>
        </a>

        <div className="home-top__right-reklam-block rekl-gradient">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComplaintsSingle;
