import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import axios from "axios";
import { API_URL } from "../../../HHTP/clients";
import moment from "moment";
import MyLink from "../../Common/MyLink";
import { useTranslation } from "react-i18next";

const ForumSingle = ({ id }) => {
  const [forum, setForum] = useState([]);
  const [comment, setComment] = useState([]);
  const {t} = useTranslation();

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/forum/${id}/`,
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
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/forum/comments/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setComment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="forum-single">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t('header.navbar.home')}</MyLink>|<MyLink to="/forum">{t('forum.title')}</MyLink>
              |
              <span className="breadcrumb_last" aria-current="page">
              {t('forum.single')}
              </span>
            </span>
          </span>
        </ul>
        {forum.map((item) => (
          <div key={item.id}>
            <div className="forum-single__top">
              <h1>{item.short_description}</h1>
            </div>

            <div className="forum-single__cont">
              <div
                dangerouslySetInnerHTML={{ __html: item.full_description }}
              ></div>
            </div>
          </div>
        ))}
        <div className="forum-single__box">
          {comment.length ? (
            comment?.map((item) => (
              <div key={item.id} className="forum-single__item">
                <div className="forum-single__item-top">
                  <img src="/images/Forum-single/a1.jpg" alt="" />
                  <h4>{item.fullName}</h4>
                  <p>{moment(item.created_at).format("MMM MM / YYYY")}</p>
                </div>
                <div className="forum-single__item-bot">
                  <p>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.comment }}
                    ></div>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>

        <div className="home-top__right-reklam-block rekl-gradient">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
      </div>
    </DashboardLayout>
  );
};



export default ForumSingle;
