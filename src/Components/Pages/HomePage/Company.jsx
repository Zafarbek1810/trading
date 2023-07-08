import React from "react";

const Company = () => {
  return (
    <>
      <div className="company">
        <div className="company__top">
          <h2 style={{fontWeight:900}}>Рейтинг брокеров</h2>
          <h3>
            На нашем сайте мы собрали всю необходимую информацию о торговых
            платформах
          </h3>
        </div>

        <div className="rating">
          <div className="rating__content-box">
            <div className="rating__content-item">
              <div className="rating__content-item-left">
                <span className="top-num"> №1 </span>
                <div className="rating__content-item-left-top">
                  <h3>Binance.com</h3>
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

                <a className="gray-btn" href="Brokers-rating-single.html">
                  Узнать больше 
                </a>
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
                <span className="top-num op0"> №1 </span>
                <div className="rating__content-item-left-top">
                  <h3>Binance.com</h3>
                  <span className="red"> Мошенник </span>
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

                <a className="gray-btn" href="#">
                  {" "}
                  Узнать больше {" "}
                </a>
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
                <span className="top-num"> №1 </span>
                <div className="rating__content-item-left-top">
                  <h3>Binance.com</h3>
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

                <a className="gray-btn" href="#">
                  {" "}
                  Узнать больше {" "}
                </a>
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
            <span> Смотреть все </span>
          </a>
        </div>
      </div>

      <div className="home-top__right-reklam-block rekl-gradient">
        <img src="/images/Home-page/333.gif" alt="" />
      </div>
    </>
  );
};

export default Company;
