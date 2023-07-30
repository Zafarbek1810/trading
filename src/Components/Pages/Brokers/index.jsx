import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { Alert, Modal, Rate } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Brokers = () => {
  const [brokers, setBrokers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rate, setRate] = useState(0);
  const [brokerId, setBrokerId] = useState(0);
  const [gmail, setGmail] = useState("");
  const { register, handleSubmit, setValue, control, reset } = useForm();
  const [ads, setAds] = useState([]);
  const { t, i18n } = useTranslation();

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
      url: `${API_URL}/brokers/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setBrokers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleRate = (v, id) => {
    console.log(v, id);
    setRate(v);
    setBrokerId(id);
    axios({
      method: "post",
      url: `${API_URL}/brokers/report/`,
      data: {
        broker_id: id,
        rating: v,
        // toEmail: values.gmail,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        Alert.success("Success");
      })
      .catch((err) => {
        console.log(err);
      });
    showModal();
  };

  const changeInput = (e) => {
    setGmail(e.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onSubmit = (values) => {
    console.log(values);
    setIsModalOpen(false);
    axios({
      method: "post",
      url: `${API_URL}/brokers/report/`,
      data: {
        broker_id: brokerId,
        rating: rate,
        // toEmail: values.gmail,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        Alert.success("Success");
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
  };

  return (
    <DashboardLayout>
      <div className="brokers">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
              {t('header.navbar.broker')}
              </span>
            </span>
          </span>
        </ul>

        {/* <a href="#" className="glow-on-hover mb-4">
          Как оставить отзыв — узнать большее
          <img src="/images/Icons/ArrowRight.svg" alt="" />
        </a> */}

        <div className="brokers-top">
          <h1>{t('brokers.title')}</h1>
          <p>
          {t('brokers.descr')}
          </p>
          <div className="brokers-top__box">
            <div className="brokers-top__box-item">
              <h6>{t('brokers.reliable')}</h6>
              <h5>16672</h5>
            </div>

            <div className="brokers-top__box-item">
              <h6>{t('brokers.reviewMan')}</h6>
              <h5>81724134</h5>
            </div>
          </div>
        </div>

        <div className="brokers-list">
          {/* <div className="brokers-list__top">
            <div className="sel-box">
              <select id="brokers-select">
                <option value="all" className="bg-opt">
                  Все
                </option>
                <option value="best" className="bg-opt">
                  Высокий рейтинг
                </option>
                <option value="average" className="bg-opt">
                  Средний рейтинг
                </option>
                <option value="worst" className="bg-opt">
                  Низкий рейтинг
                </option>
              </select>
            </div>
            <a className="active" href="#" data-filter="all">
              Все броккеры
            </a>
            <a href="#" data-filter="forex">
              Forex
            </a>
            <a href="#" data-filter="crypto">
              Crypto
            </a>
          </div> */}

          <div className="brokers-list__box">
            {brokers.map((broker) => (
              <div
                key={broker.id}
                className="brokers-list__item"
                data-cat="forex"
              >
                <div className="brokers-list__item-left">
                  <h3>{broker.name}</h3>

                  <div className="brokers-list__item-left-estimates">
                    <div className="brokers-list__item-left-estimates-left">
                      <div className="brokers-list__item-left-estimates-left-top">
                        <span data-est="">5</span>
                        <h5>{t('brokers.high')}</h5>
                        <img src="/images/Icons/Frame.svg" alt="" />
                      </div>
                      <div className="brokers-list__item-left-estimates-left-bot">
                        <Rate onChange={(v) => handleRate(v, broker.id)} />
                      </div>
                    </div>

                    <div className="brokers-list__item-left-estimates-center">
                      <div className="brokers-list__item-left-estimates-center-top">
                        <img src="/images/Icons/reviews.svg" alt="" />
                        <h5>12.1K</h5>
                      </div>
                      <div className="brokers-list__item-left-estimates-center-bot">
                        <p>{t('brokers.reviews')}</p>
                      </div>
                    </div>

                    <div className="brokers-list__item-left-estimates-right">
                      <div className="brokers-list__item-left-estimates-right-top">
                        <img src="/images/Icons/acc.svg" alt="" />
                        <h5>104.9K</h5>
                      </div>
                      <div className="brokers-list__item-left-estimates-right-bot">
                        <p>{t('brokers.acc')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="brokers-list__item-left-assets">
                    <div className="brokers-list__item-left-assets-item">
                      <h6>786+</h6>
                      <p>{t('brokers.assets')}</p>
                    </div>
                    <div className="brokers-list__item-left-assets-item">
                      <h6>250+</h6>
                      <p>{t('brokers.vlad')}</p>
                    </div>
                    <div className="brokers-list__item-left-assets-item">
                      <h6>347+</h6>
                      <p>{t('brokers.app')}</p>
                    </div>
                  </div>

                  <div className="brokers-list__item-left-text">
                    <div className="top">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: currentLang === "ru" ? broker.short_description_ru : broker.short_description_en,
                        }}
                      />
                    </div>
                  </div>

                  <div className="brokers-list__item-left-btns">
                    <a className="orange-btn" href={broker.url}>
                    {t('brokers.site')}
                    </a>
                    <MyLink
                      className="gray-btn"
                      to={`/brokers-single?id=${broker.id}`}
                    >
                      {broker.name} {t('brokers.obzor')}
                    </MyLink>
                  </div>
                </div>

                <div className="brokers-list__item-right">
                  <div className="brokers-list__item-right-img-wrap">
                    <img src={`${IMG_URL}/media/${broker.file}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a className="btn-more-grad" href="#">
            <span>{t('homepage.more')}</span>
          </a>
        </div>

        {ads
          .filter((cat) => cat.category_id === 4)
          .map((item) => (
            <div
              key={item.id}
              className="home-top__right-reklam-block rekl-gradient mb-0 mt-5"
            >
              <a href={item.ads_url}>
                <img src={`${IMG_URL}/${item.file}`} alt="" />
              </a>
            </div>
          ))}
      </div>
    </DashboardLayout>
  );
};

export default Brokers;
