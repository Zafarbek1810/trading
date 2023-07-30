import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import Company from "./Company";
import FAQ from "./FAQ";
import { HomePageWrapper } from "./style";
import SignalComp from "./SignalComp";
import { API_URL, IMG_URL } from "../../../HHTP/clients";
import axios from "axios";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const [ads, setAds] = useState([]);
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

  const { t } = useTranslation()

  return (
    <DashboardLayout>
      <HomePageWrapper>
        <div className="home-page-wrap">
          <h1>{t('homepage.title')}</h1>
          {ads
            .filter((cat) => cat.category_id === 3)
            .map((item) => (
              <div
                key={item.id}
                className="home-top__right-reklam-block rekl-gradient"
              >
                <a href={item.ads_url}>
                  <img src={`${IMG_URL}/${item.file}`} alt="" />
                </a>
              </div>
            ))}
          <SignalComp />
          <Company />
          <FAQ />
        </div>
      </HomePageWrapper>
    </DashboardLayout>
  );
};

export default HomePage;
