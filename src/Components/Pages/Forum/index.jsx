import React, {useEffect, useState} from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import {API_URL, IMG_URL} from "../../../HHTP/clients";
import moment from "moment";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

const Styled = styled.div`
  .author {
    span {
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
  }

  .comment-btn {
    background: #275DF1;
    color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    border: 2px solid #2962ff;

    &:hover {
      background: transparent;
      color: #275DF1;
    }
  }

  .img {
    width: 100%;
    height: 250px !important;
  }
`;

const Forum = () => {
    const [forum, setForum] = useState([]);
    const {t, i18n} = useTranslation();

    const currentLang = i18n.language;

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
            <Styled>
                <div className="forum">
                    <ul id="breadcrumb">
            <span>
              <span>
                <MyLink to="/">{t("header.navbar.home")}</MyLink>|
                <span className="breadcrumb_last" aria-current="page">
                  {t("forum.title")}
                </span>
              </span>
            </span>
                    </ul>

                    <div className="forum__top">
                        <div className="box">
                            <h1>{t("forum.title")}</h1>
                            <p>{t("forum.descr")}</p>
                        </div>

                        <MyLink className="add-btn" to="/publish-theme">
                            <img src="/images/Icons/plus.svg" alt=""/>
                            {t("forum.add")}
                        </MyLink>
                    </div>

                    <div className="forum__box">
                        {forum.map((item) => (
                            <MyLink
                                key={item.id}
                                to={`/forum/${item.id}`}
                                className="forum__item"
                            >
                                <div className="forum__item-top">
                                    <p>{moment(item.created_at).format("MMM MM / YYYY")}</p>
                                    <h4>
                                        {t("forum.subject")}: {currentLang === 'en' ? item.name_en : item.name_ru}
                                    </h4>
                                </div>

                                <div className="forum__item-center">
                                    <img style={{height: 170, objectFit: "cover"}}
                                         src={`${IMG_URL}/media/${item.file}`}/>
                                </div>

                                <div className="forum__item-bottom">
                                    <div className="author">
                                        {/* <span>{item.fullName.substring(0, 1)}</span> */}
                                        <img style={{height: 50, width: 50, objectFit: "cover"}}
                                             src={`${IMG_URL}/media/${item.avatar}`}/>
                                        <div className="author-cont">
                                            <h6>{item.fullName}</h6>
                                            <p>{t("forum.author")}</p>
                                        </div>
                                    </div>
                                    <MyLink className="comment-btn" to={`/add-comment?id=${item.id}`}>
                                        {t("forum.leaveComment")}
                                    </MyLink>
                                </div>
                            </MyLink>
                        ))}
                    </div>

                    <a className="btn-more-blue" href="#">
                        <span>{t("homepage.more")}</span>
                    </a>
                </div>
            </Styled>
        </DashboardLayout>
    );
};

export default Forum;
