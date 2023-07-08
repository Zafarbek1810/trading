import React from "react";
import { SidebarWrapper } from "./style";
import MyLink from "../../Common/MyLink";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className="main">
        <div className="home-top-sec">
          <div className="home-top-wrap">
            <div className="home-top">
              <div className="home-top__left">
                <div className="home-top__left-cont">
                  <div className="home-top__left-top">
                    <a className="tg-btn" href="#">
                      <img src="/images/Icons/soc-tg.svg" alt="" />
                      Telegram-канал
                    </a>
                    <ul>
                      <li>
                        <MyLink to="/courses">Обучающие курсы</MyLink>
                      </li>
                      <li>
                        <MyLink to="/brokers-raiting">Рейтинг броккеров</MyLink>
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
                  </div>

                  <div className="home-top__left-center rekl-gradient">
                    <img src="/images/Home-page/rekl.gif" alt="" />
                  </div>

                  <div className="home-top__left-bottom rekl-gradient">
                    <img src="/images/Home-page/rekl2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
