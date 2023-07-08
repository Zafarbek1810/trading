import React from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";

const Complaints = () => {
  return (
    <DashboardLayout>
      <div className="brokers-single">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|
              <span className="breadcrumb_last" aria-current="page">
                Мультивалютный калькулятор
              </span>
            </span>
          </span>
        </ul>

        <div className="complaints__all">
          <div className="complaints__all-title">
            <div className="complaints__title">
              <h1>Жалобы</h1>
              <h2>
                Здесь мы публикуем жалобы пользователей на брокеров. Если вас
                обманул брокер...
              </h2>
            </div>
            <MyLink to="/complaints-form">Пожаловатся</MyLink>
          </div>

          <div className="complaints__all-cards">
            <MyLink to="/complaints-single" className="complaints__card">
              <span>добавлена 6 мин. назад </span>
              <div className="complaints__card-items">
                <div className="card__broker-img">
                  <img src="images/Brokers/alpari.png" alt="" />
                </div>
                <div className="complaints__card-text">
                  <h2>fxclub.org</h2>
                  <div className="number-complaints">
                    <img src="images/Icons/UsersThree.png" alt="" />
                    <span>Количество жалоб (11)</span>
                  </div>
                  <div className="arr">
                    <img src="images/Icons/arr-right.svg" alt="" />
                  </div>
                </div>
              </div>
            </MyLink>

            <MyLink to="/complaints-single" className="complaints__card">
              <span>добавлена 6 мин. назад </span>
              <div className="complaints__card-items">
                <div className="card__broker-img">
                  <img src="images/Brokers/alpari.png" alt="" />
                </div>
                <div className="complaints__card-text">
                  <h2>Binance.com</h2>
                  <div className="number-complaints">
                    <img src="images/Icons/UsersThree.png" alt="" />
                    <span>Количество жалоб (11)</span>
                  </div>
                  <div className="arr">
                    <img src="images/Icons/arr-right.svg" alt="" />
                  </div>
                </div>
              </div>
            </MyLink>

            <MyLink to="/complaints-single" className="complaints__card">
              <span>добавлена 6 мин. назад </span>
              <div className="complaints__card-items">
                <div className="card__broker-img">
                  <img src="images/Brokers/alpari.png" alt="" />
                </div>
                <div className="complaints__card-text">
                  <h2>Alpari.com</h2>
                  <div className="number-complaints">
                    <img src="images/Icons/UsersThree.png" alt="" />
                    <span>Количество жалоб (11)</span>
                  </div>
                  <div className="arr">
                    <img src="images/Icons/arr-right.svg" alt="" />
                  </div>
                </div>
              </div>
            </MyLink>

            <MyLink to="/complaints-single" className="complaints__card">
              <span>добавлена 6 мин. назад </span>
              <div className="complaints__card-items">
                <div className="card__broker-img">
                  <img src="images/Brokers/alpari.png" alt="" />
                </div>
                <div className="complaints__card-text">
                  <h2>fxclub.org</h2>
                  <div className="number-complaints">
                    <img src="images/Icons/UsersThree.png" alt="" />
                    <span>Количество жалоб (11)</span>
                  </div>
                  <div className="arr">
                    <img src="images/Icons/arr-right.svg" alt="" />
                  </div>
                </div>
              </div>
            </MyLink>

            <MyLink to="/complaints-single" className="complaints__card">
              <span>добавлена 6 мин. назад </span>
              <div className="complaints__card-items">
                <div className="card__broker-img">
                  <img src="images/Brokers/alpari.png" alt="" />
                </div>
                <div className="complaints__card-text">
                  <h2>fxclub.org</h2>
                  <div className="number-complaints">
                    <img src="images/Icons/UsersThree.png" alt="" />
                    <span>Количество жалоб (11)</span>
                  </div>
                  <div className="arr">
                    <img src="images/Icons/arr-right.svg" alt="" />
                  </div>
                </div>
              </div>
            </MyLink>

            <MyLink to="/complaints-single" className="complaints__card">
              <span>добавлена 6 мин. назад </span>
              <div className="complaints__card-items">
                <div className="card__broker-img">
                  <img src="images/Brokers/alpari.png" alt="" />
                </div>
                <div className="complaints__card-text">
                  <h2>fxclub.org</h2>
                  <div className="number-complaints">
                    <img src="images/Icons/UsersThree.png" alt="" />
                    <span>Количество жалоб (11)</span>
                  </div>
                  <div className="arr">
                    <img src="images/Icons/arr-right.svg" alt="" />
                  </div>
                </div>
              </div>
            </MyLink>
          </div>

          <a className="btn-more-complaints" href="#">
            <span>Загрузить еще</span>
          </a>

          <div className="home-top__right-reklam-block rekl-gradient mb-0 mt-5">
            <img src="images/Home-page/333.gif" alt="" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Complaints;
