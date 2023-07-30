import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import { CoursesWrapper } from "./style";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { useTranslation } from "react-i18next";
import MyLink from "../../Common/MyLink";

const Courses = () => {
  const [course, setCourse] = useState([]);
  const {t, i18n} = useTranslation()

  const currentLang = i18n.language

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/courses/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardLayout>
      <CoursesWrapper className="courses">
        <ul id="breadcrumb">
          <span>
            <span>
            <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t('course.title')}
              </span>
            </span>
          </span>
        </ul>

        <div className="courses__top">
          <h1>{t('course.title')}</h1>
          <p>{t('course.descr1')}</p>
        </div>

        <div className="courses__content">
          <p className="courses__content-text">
          {t('course.descr2')}
          </p>

          <div className="courses__box">
            {course.map((item) => (
              <div key={item.id} className="courses__item">
                <div className="right_img">
                  <img src={`${IMG_URL}/${item.file}`} />
                </div>
                <div className="courses__item-left">
                  <h3>{currentLang==="en" ? item.name_en : item.name_ru}</h3>

                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                     <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        {t('course.courseDescr')}
                      </button>
                    </li>
                    {/*<li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                       {t('course.whyBest')}
                      </button>
                    </li> */}
                    {/* <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        {t('course.courseDescr')}
                      </button>
                    </li> */}
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html:currentLang==="en"?  item.description_en : item.description_ru }}
                      />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description2 }}
                      />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html:currentLang==="en"?  item.description_en : item.description_ru }}
                      />
                    </div>
                  </div>

                  <div className="courses__item-left-bot">
                    <div className="courses__item-left-bot-price">
                      <p>{t('course.cost')}:</p>
                      <h6>{item.cost}$</h6>
                    </div>
                    <div className="courses__item-left-bot-btn">
                      <a className="orange-btn" href="#">
                      {t('course.take')}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="courses__item-right">
                  <a href={item.course_url}>
                    <img src="images/Icons/soc-tg.svg" alt="" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="courses__why">
            <h4>{t('course.notfree')} </h4>
            <p>
            {t('course.freeDescr')}
            </p>
            <h5>{t('course.purchase')} &darr;</h5>
            <a className="tg-btn-call" href="">
              <img src="images/Icons/soc-tg.svg" alt="" />
              {t('course.contactUs')}
            </a>
          </div>
        </div>
      </CoursesWrapper>
    </DashboardLayout>
  );
};

export default Courses;
