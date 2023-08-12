import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import { useTranslation } from "react-i18next";
import MyLink from "../../Common/MyLink";
import styled from "styled-components";

const Calendar = () => {
  const [ads, setAds] = useState([]);
  const { t } = useTranslation();

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
  return (
    <DashboardLayout>
      <div className="calendar">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t("header.navbar.home")}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t("calendar.title")}
              </span>
            </span>
          </span>
        </ul>

        <h1>{t("calendar.title")}</h1>

        <div className="calendar__box">
          <div className="economic__calendar">
            <iframe
              src="https://sslecal2.investing.com?ecoDayBackground=%23000000&columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,54,114,95,86,29,47,145,34,70,174,163,32,4,93,138,8,178,74,17,39,51,24,72,59,84,75,23,14,48,92,66,33,106,26,10,102,232,6,170,57,107,204,37,122,15,78,94,97,68,96,103,188,111,42,109,105,7,82,139,172,20,21,43,60,143,87,193,44,148,125,53,38,56,80,100,52,238,36,90,112,5,41,46,85,202,63,123,168,61,180,45,71,22,113,247,55,27,12,9,162,121,89,110,11,119,35&calType=week&timeZone=18&lang=7"
              width="100%"
              height="600"
              frameBorder="0"
              allowtransparency="true"
              marginWidth="0"
              marginHeight="0"
              id="iframe-calendar"
              className="iframe-calendar"
            ></iframe>
          </div>
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

const StyledWrapper = styled.div`
  #tradingview-widget-container-events {
    position: absolute;
    top: 0;
    left: 0;
  }

  .economic__calendar > div {
    width: 100% !important;
  }
`;
export default Calendar;
