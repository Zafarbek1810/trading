import React, { useEffect, useState } from "react";
import { SidebarWrapper } from "./style";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import { API_URL } from "../../../HHTP/clients";

const Sidebar = () => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}api/ads/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setAds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

                  {ads
                    .filter((cat) => cat.category_id === 1)
                    .map((item) => (
                      <div className="home-top__left-center rekl-gradient">
                        <a href={item.ads_url}>
                        <img src={`${API_URL}/${item.file}`} alt="" />
                        </a>
                      </div>
                    ))}

                  {ads
                    .filter((cat) => cat.category_id === 2)
                    .map((item) => (
                      <div className="home-top__left-center rekl-gradient">
                        <a href={item.ads_url}>
                        <img src={`${API_URL}/${item.file}`} alt="" />
                        </a>
                      </div>
                    ))}
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
