import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { useTranslation } from "react-i18next";
import MyLink from "../../Common/MyLink";

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const [ads, setAds] = useState([]);
  const { t, i18n } =useTranslation()

  const currentLang = i18n.language;

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
      url: `${API_URL}/faq/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res, "faq");
        setFaq(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const popup = document?.querySelector(".reklam-popup");

      if(popup) {
      popup.classList.add("active");

      const popupBtnClose = document.querySelector("#popup-btn-close");
      popupBtnClose.addEventListener("click", () => {
        popup.classList.add("remove");
      });
    }

    }, 10000);
    
  }, [ads]);

  return (
    <>
      <div className="home-faqs">
        <h3>{t('homepage.faqTitle')}</h3>

        <div className="accordion" id="accordionExample">
          {faq.map((item) => (
            <div key={item.id} className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {currentLang==='ru' ? item.question_ru : item.question_en}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div
                    dangerouslySetInnerHTML={{ __html:currentLang==="en" ? item.answer_en : item.answer_ru }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {ads
        .filter((cat) => cat.category_id === 4)
        .map((item) => (
          <div
            key={item.id}
            className="home-top__right-reklam-block rekl-gradient mb-0"
          >
            <a href={item.ads_url}>
              <img src={`${IMG_URL}/${item.file}`} alt="" />
            </a>
          </div>
        ))}

      {ads
        .filter((cat) => cat.category_id === 5)
        .map((item) => (
          <div key={item.id} className="reklam-popup">
            <div className="reklam-popup__body">
              <button id="popup-btn-close">
                <img src="/images/Icons/close-circle-fill2.svg" alt="" />
              </button>
              <MyLink to={item.ads_url}>
                <img src={`${IMG_URL}/${item.file}`} alt="" />
              </MyLink>
            </div>
          </div>
        ))}
    </>
  );
};

export default FAQ;
