import React from "react";

import MyLink from "../../Common/MyLink";
import { HeaderWrapper } from "./Header.style";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <HeaderWrapper>
      <div className="header">
        <div className="header-top-wrap">
          <div className="container">
            <div className="header-top">
              <MyLink className="header-top__logo" to="/">
                <img src="/images/Icons/header-logo.svg" alt="logo" />
              </MyLink>
              <div className="header-top__menu">
                <ul>
                  <li className={router.route === "/brokers" ? "active" : ""}>
                    <MyLink to="/brokers">Брокеры</MyLink>
                  </li>
                  <li className={router.route === "/calculator" ? "active" : ""}>
                    <MyLink to="/calculator">Мультивалютный калькулятор</MyLink>
                  </li>
                  <li className={router.route === "/calendar"  ? "active" : ""}>
                    <MyLink to="/calendar">Экономический календарь</MyLink>
                  </li>
                  <li className={(router.route === "/complaints" || router.route ==="/complaints-single" || router.route ==="/complaints-form") ? "active" : ""}>
                    <MyLink to="/complaints">Жалобы</MyLink>
                  </li>
                </ul>
                <div className="header-top__btns">
                  <a className="header-top__btns-search" href="#">
                    <img src="/images/Icons/search.svg" alt="" />
                    Поиск
                  </a>
                  <div className="header-top__sel-wrap">
                    <img src="/images/Icons/GlobeStand.svg" alt="" />
                    <select>
                      <option className="bg-opt">Русский</option>
                      <option className="bg-opt">English</option>
                    </select>
                  </div>
                </div>
                <div className="header-top__search">
                  <input type="text" placeholder="поиск..." />
                  <button className="header-top__search-close">
                    <img src="/images/Icons/close-black.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-mob-wrap">
          <div className="container">
            <div className="header-mob">
              <MyLink className="header-mob__logo" to="/">
                <img src="/images/Icons/footer-logo-333.svg" alt="logo" />
              </MyLink>

              <div className="box-menu">
                <MyLink to="/" className="search-bnt">
                  <img src="/images/Icons/search.svg" alt="" />
                </MyLink>

                <div className="select-wrapper">
                  <select>
                    <option className="bg-opt">RU</option>
                    <option className="bg-opt">ENG</option>
                  </select>
                </div>

                <div className="header-mob__burger">
                  <span></span>
                </div>
              </div>

              <div className="header-mob-search">
                <input type="text" placeholder="Поиск..." />
                <button className="header-mob-search-close">
                  <img src="/images/Icons/close-black.svg" alt="" />
                </button>
              </div>

              <nav className="header-mob__menu">
                <ul>
                  <li>
                    <MyLink to="/brokers">Брокеры</MyLink>
                  </li>
                  <li>
                    <MyLink to="/calculator">Мультивалютный калькулятор</MyLink>
                  </li>
                  <li>
                    <MyLink to="/calendar">Экономический календарь</MyLink>
                  </li>
                  <li>
                    <MyLink to="/complaints">Жалобы</MyLink>
                  </li>
                </ul>

                <MyLink className="tg-btn" to="/#">
                  <img src="/images/Icons/soc-tg.svg" alt="" />
                  Telegram-канал
                </MyLink>

                <ul>
                  <li>
                    <MyLink to="/courses">Обучающие курсы</MyLink>
                  </li>
                  <li>
                    <MyLink to="/brokers-rating">Рейтинг броккеров</MyLink>
                  </li>
                  <li>
                    <MyLink to="/news">Новости</MyLink>
                  </li>
                  <li>
                    <MyLink to="/partners">Наши партнеры</MyLink>
                  </li>
                  <li>
                    <MyLink to="/forum">Форум</MyLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
