import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import moment from "moment";
import { useTranslation } from "react-i18next";

const Forum = () => {
  const [forum, setForum] = useState([]);
  const {t} = useTranslation();

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/forum/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setForum(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="forum">
        <ul id="breadcrumb">
          <span>
            <span>
            <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
              {t('forum.title')}
              </span>
            </span>
          </span>
        </ul>

        <div className="forum__top">
          <div className="box">
            <h1>{t('forum.title')}</h1>
            <p>
              {t('forum.descr')}
            </p>
          </div>

          <MyLink className="add-btn" to="/publish-theme">
            <img src="/images/Icons/plus.svg" alt="" />
            {t('forum.add')}
          </MyLink>
        </div>

        <div className="forum__box">
          {forum.map((item) => (
            <MyLink
              key={item.id}
              to={`/forum-single?id=${item.id}`}
              className="forum__item"
            >
              <div className="forum__item-top">
                <p>{moment(item.created_at).format("MMM MM / YYYY")}</p>
                <h4>{t('forum.subject')}: {item.name} </h4>
              </div>

              <div className="forum__item-center">
                <img src={`${IMG_URL}/media/${item.file}`} />
              </div>

              <div className="forum__item-bottom">
                <div className="author">
                  <img src="/images/Forum/user1.jpg" alt="" />
                  <div className="author-cont">
                    <h6>{item.fullName}</h6>
                    <p>{t('forum.author')}</p>
                  </div>
                </div>
                <object>
                  <MyLink to={`/add-comment?id=${item.id}`}>
                  {t('forum.leaveComment')}
                  </MyLink>
                </object>
              </div>
            </MyLink>
          ))}
        </div>

        <a className="btn-more-blue" href="#">
          <span>{t('homepage.more')}</span>
        </a>

        <div className="home-top__right-reklam-block rekl-gradient">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Forum;
