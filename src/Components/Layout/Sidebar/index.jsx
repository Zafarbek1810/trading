import React from "react";
import { SidebarWrapper } from "./style";

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
                      <img src="images/Icons/soc-tg.svg" alt="" />
                      Telegram-канал
                    </a>
                    <ul>
                      <li>
                        <a href="Courses.html">Обучающие курсы</a>
                      </li>
                      <li>
                        <a href="Brokers-rating.html">Рейтинг броккеров</a>
                      </li>
                      <li>
                        <a href="News.html">Новости</a>
                      </li>
                      <li>
                        <a href="Partners.html">Наши партнеры</a>
                      </li>
                      <li>
                        <a href="Forum.html">Форум</a>
                      </li>
                    </ul>
                  </div>

                  <div className="home-top__left-center rekl-gradient">
                    <img src="images/Home-page/rekl.gif" alt="" />
                  </div>

                  <div className="home-top__left-bottom rekl-gradient">
                    <img src="images/Home-page/rekl2.jpg" alt="" />
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
