import React from "react";
import DashboardLayout from "../../Layout"
import MyLink from "../../Common/MyLink";

const BrokersRaiting = () => {
  return (
    <DashboardLayout>
    <div className="rating">
      <ul id="breadcrumb">
        <span>
          <span>
            <a href="#">Главная</a>|
            <span className="breadcrumb_last" aria-current="page">
              Рейтинг броккеров
            </span>
          </span>
        </span>
      </ul>

      <div className="rating__top">
        <h1>Рейтинг брокеров </h1>
        <p>
          На нашем сайте мы предоставляем рейтинг компаний, на основе
          объективной оценки...
        </p>
      </div>

      <div className="rating__content">
        <p className="rating__content-text">
          Рейтинг основывается на таких показателях, как популярность,
          количество положительных...
        </p>

        <div className="rating__content-box">
          <div className="rating__content-item">
            <div className="rating__content-item-left">
              <span className="top-num">№1</span>
              <div className="rating__content-item-left-top">
                <h3>Binance.com</h3>
                <span className="green">Можно доверять</span>
              </div>

              <h4>
                Инструменты для торговли: <span>Криптовалюты</span>
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

              <MyLink className="gray-btn" to="/brokers-raiting-single">
                Узнать больше 
              </MyLink>
            </div>

            <div className="rating__content-item-right">
              <div className="img-box">
                <img src="/images/Brokers/alpari.png" alt="" />
                <span className="best">Best</span>
              </div>
            </div>
          </div>

          <div className="rating__content-item">
            <div className="rating__content-item-left">
              <span className="top-num op0">№1</span>
              <div className="rating__content-item-left-top">
                <h3>Binance.com</h3>
                <span className="red">Мошенник</span>
              </div>

              <h4>
                Инструменты для торговли: <span>Криптовалюты</span>
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

              <MyLink className="gray-btn" to="/brokers-raiting-single">
                Узнать больше 
              </MyLink>
            </div>

            <div className="rating__content-item-right">
              <div className="img-box">
                <img src="/images/Brokers/alpari.png" alt="" />
                <span className="scam">Scam</span>
              </div>
            </div>
          </div>

          <div className="rating__content-item">
            <div className="rating__content-item-left">
              <span className="top-num">№1</span>
              <div className="rating__content-item-left-top">
                <h3>Binance.com</h3>
                <span className="green">Можно доверять</span>
              </div>

              <h4>
                Инструменты для торговли: <span>Криптовалюты</span>
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

              <MyLink className="gray-btn" to="/brokers-raiting-single">
                Узнать больше 
              </MyLink>
            </div>

            <div className="rating__content-item-right">
              <div className="img-box">
                <img src="/images/Brokers/alpari.png" alt="" />
                <span className="best">Best</span>
              </div>
            </div>
          </div>
        </div>

        <a className="btn-more-grad" href="#">
          <span>Загрузить еще</span>
        </a>

        <div className="home-top__right-reklam-block rekl-gradient mb-0 mt-5">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default BrokersRaiting;
