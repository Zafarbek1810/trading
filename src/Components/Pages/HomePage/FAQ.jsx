import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const [ads, setAds] = useState([]);
  const { t } =useTranslation()

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
        console.log(res);
        setFaq(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                  {item.question}
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
                    dangerouslySetInnerHTML={{
                      __html: item.answer,
                    }}
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
    </>
  );
};

export default FAQ;
