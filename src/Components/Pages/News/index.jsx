import React from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";

const News = () => {
  return (
    <DashboardLayout>
      <div className="news">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|
              <span className="breadcrumb_last" aria-current="page">
                Новости
              </span>
            </span>
          </span>
        </ul>

        <div className="news__top">
          <h1>Новости</h1>
          <p>Следите за событиями в режиме реального времени</p>
        </div>

        <div className="news__box">
          <MyLink to="/news-single" className="news__item">
            <div className="news__item-top">
              <p>24 мин.назад</p>
              <h6>ЭКОНОМИКА</h6>
            </div>
            <div className="news__item-center">
              <img src="/images/News/n1.jpg" alt="" />
            </div>
            <div className="news__item-bot">
              <p>Саудовская Аравия собирается в очередной раз...</p>
            </div>
          </MyLink>

          <MyLink to="/news-single" className="news__item">
            <div className="news__item-top">
              <p>40 мин.назад</p>
              <h6>ФОНДОВЫЙ РЫНОК</h6>
            </div>
            <div className="news__item-center">
              <img src="/images/News/n2.jpg" alt="" />
            </div>
            <div className="news__item-bot">
              <p>Мосбиржа переведет акции и валютные...</p>
            </div>
          </MyLink>

          <MyLink to="/news-single" className="news__item">
            <div className="news__item-top">
              <p>17.05.2023</p>
              <h6>ФОРЕКС</h6>
            </div>
            <div className="news__item-center">
              <img src="/images/News/n3.jpg" alt="" />
            </div>
            <div className="news__item-bot">
              <p>Доллар перешел к росту к евро и иене...</p>
            </div>
          </MyLink>

          <MyLink to="/news-single" className="news__item">
            <div className="news__item-top">
              <p>12.05.2023</p>
              <h6>КРИПТОВАЛЮТЫ</h6>
            </div>
            <div className="news__item-center">
              <img src="/images/News/n4.jpg" alt="" />
            </div>
            <div className="news__item-bot">
              <p>Евросоюз утвердил правила использования...</p>
            </div>
          </MyLink>

          <MyLink to="/news-single" className="news__item">
            <div className="news__item-top">
              <p>17.05.2023</p>
              <h6>ФОРЕКС</h6>
            </div>
            <div className="news__item-center">
              <img src="/images/News/n3.jpg" alt="" />
            </div>
            <div className="news__item-bot">
              <p>Доллар перешел к росту к евро и иене...</p>
            </div>
          </MyLink>

          <MyLink to="/news-single" className="news__item">
            <div className="news__item-top">
              <p>12.05.2023</p>
              <h6>КРИПТОВАЛЮТЫ</h6>
            </div>
            <div className="news__item-center">
              <img src="/images/News/n4.jpg" alt="" />
            </div>
            <div className="news__item-bot">
              <p>Евросоюз утвердил правила использования...</p>
            </div>
          </MyLink>
        </div>

        <a className="btn-more" href="#">
          <span>Загрузить еще</span>
        </a>

        <div className="home-top__right-reklam-block rekl-gradient mb-0 mt-5">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default News;
