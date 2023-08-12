import React, { useEffect, useState } from "react";
import { SidebarWrapper } from "./style";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [ads, setAds] = useState([]);
  const [tglink, setTglink] = useState({});
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/ads/`,
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

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/tglink/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setTglink(res.data);
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
                    <a className="tg-btn" href={tglink.link}>
                      <img src="/images/Icons/soc-tg.svg" alt="" />
                      {t("sidebar.telegram")}
                    </a>
                    <ul>
                      <li>
                        <MyLink
                          to="/courses"
                          className={
                            router.route === "/courses" ? "active" : ""
                          }
                        >
                          {t("sidebar.courses")}
                        </MyLink>
                      </li>
                      <li>
                        <MyLink
                          to="/brokers-raiting"
                          className={
                            router.route === "/brokers-raiting" ? "active" : ""
                          }
                        >
                          {t("sidebar.brokers-raiting")}
                        </MyLink>
                      </li>
                      <li>
                        <MyLink
                          to="/news"
                          className={router.route === "/news" ? "active" : ""}
                        >
                          {t("sidebar.news")}
                        </MyLink>
                      </li>
                      <li>
                        <MyLink
                          to="/partners"
                          className={
                            router.route === "/partners" ? "active" : ""
                          }
                        >
                          {t("sidebar.partners")}
                        </MyLink>
                      </li>
                      <li>
                        <MyLink
                          to="/forum"
                          className={router.route === "/forum" ? "active" : ""}
                        >
                          {t("sidebar.forum")}
                        </MyLink>
                      </li>
                    </ul>
                  </div>

                  {ads?.length ? (
                    ads
                      .filter((cat) => cat.category_id === 1)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="home-top__left-center rekl-gradient"
                        >
                          <a href={item.ads_url}>
                            <img src={`${IMG_URL}/${item.file}`} alt="" />
                          </a>
                        </div>
                      ))
                  ) : (
                    <></>
                  )}

                  {ads
                    .filter((cat) => cat.category_id === 2)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="home-top__left-center rekl-gradient"
                      >
                        <a href={item.ads_url}>
                          <img src={`${IMG_URL}/${item.file}`} alt="" />
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
