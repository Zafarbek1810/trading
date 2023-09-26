import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import moment from "moment";
import MyLink from "../../Common/MyLink";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ForumSingle = ({ id }) => {
  const [forum, setForum] = useState([]);
  const [comment, setComment] = useState([]);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  useEffect(() => {
    if(id) {
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
    }
  }, [id]);
  useEffect(() => {
    if(id) {
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
    }
  }, [id]);
  return (
    <DashboardLayout>
      <Styled className="forum-single">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t("header.navbar.home")}</MyLink>|
              <MyLink to="/forum">{t("forum.title")}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t("forum.single")}
              </span>
            </span>
          </span>
        </ul>
        {forum.map((item) => (
          <div key={item.id}>
            <div className="forum-single__top">
              <h1>
                {currentLang === "ru"
                  ? item.short_description_ru
                  : item.short_description_en}
              </h1>
            </div>

            <div className="forum-single__cont">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    currentLang === "ru"
                      ? item.full_description_ru
                      : item.full_description_en,
                }}
              ></div>
            </div>
            <div className="screenshoots">
              <img
                style={{ height: 170, objectFit: "cover" }}
                src={`${IMG_URL}/media/${item.file}`}
              />
              {item.file1 && (
                <img
                  style={{ height: 170, objectFit: "cover" }}
                  src={`${IMG_URL}/media/${item.file1}`}
                />
              )}
              {item.file2 && (
                <img
                  style={{ height: 170, objectFit: "cover" }}
                  src={`${IMG_URL}/media/${item.file2}`}
                />
              )}
              {item.file3 && (
                <img
                  style={{ height: 170, objectFit: "cover" }}
                  src={`${IMG_URL}/media/${item.file3}`}
                />
              )}
              {item.file4 && (
                <img
                  style={{ height: 170, objectFit: "cover" }}
                  src={`${IMG_URL}/media/${item.file4}`}
                />
              )}
            </div>
          </div>
        ))}
        <div className="forum-single__box mt-4">
          {comment.length ? (
            comment?.map((item) => (
              <div key={item.id} className="forum-single__item">
                <div className="forum-single__item-top">
                  <span className="span_img">
                    {item.fullName.substring(0, 1)}
                  </span>
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
      </Styled>
    </DashboardLayout>
  );
};

const Styled = styled.div`
  .span_img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  }
`;

export default ForumSingle;
