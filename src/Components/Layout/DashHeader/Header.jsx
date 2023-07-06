import React from "react";

import MyLink from "../../Common/MyLink";
import { HeaderWrapper } from "./Header.style";

const Header = () => {
  return (
    <HeaderWrapper>
      <div class="header">
        <div class="header-top-wrap">
          <div class="container">
            <div className="header-top">
              <MyLink class="header-top__logo" to="/">
                <img src="images/Icons/header-logo.svg" alt="logo" />
              </MyLink>
              <div class="header-top__menu">
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
                <div class="header-top__btns">
                  <MyLink class="header-top__btns-search" to="/#">
                    <img src="images/Icons/search.svg" alt="" />
                    Поиск
                  </MyLink>
                  <div class="header-top__sel-wrap">
                    <img src="images/Icons/GlobeStand.svg" alt="" />
                    <select>
                      <option class="bg-opt">Русский</option>
                      <option class="bg-opt">English</option>
                    </select>
                  </div>
                </div>
                <div class="header-top__search">
                  <input type="text" placeholder="поиск..." />
                  <button class="header-top__search-close">
                    <img src="images/Icons/close-black.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="header-mob-wrap">
          <div class="container">
            <div class="header-mob">
              <MyLink class="header-mob__logo" to="/">
                <img src="images/Icons/footer-logo-333.svg" alt="logo" />
              </MyLink>

              <div class="box-menu">
                <MyLink to="#" class="search-bnt">
                  <img src="images/Icons/search.svg" alt="" />
                </MyLink>

                <div class="select-wrapper">
                  <select>
                    <option class="bg-opt">RU</option>
                    <option class="bg-opt">ENG</option>
                  </select>
                </div>

                <div class="header-mob__burger">
                  <span></span>
                </div>
              </div>

              <div class="header-mob-search">
                <input type="text" placeholder="Поиск..." />
                <button class="header-mob-search-close">
                  <img src="images/Icons/close-black.svg" alt="" />
                </button>
              </div>

              <nav class="header-mob__menu">
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

                <MyLink class="tg-btn" to="/#">
                  <img src="images/Icons/soc-tg.svg" alt="" />
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
