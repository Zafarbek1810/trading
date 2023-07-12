import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import Company from "./Company";
import FAQ from "./FAQ";
import { HomePageWrapper } from "./style";
import SignalComp from "./SignalComp";
import { API_URL } from "../../../HHTP/clients";
import axios from "axios";

const HomePage = () => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}api/ads/`,
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
      <HomePageWrapper>
        <div className="home-page-wrap">
          <h1>Самые честные обзоры на брокеров</h1>
          {ads
            .filter((cat) => cat.category_id === 3)
            .map((item) => (
              <div className="home-top__right-reklam-block rekl-gradient">
                <a href={item.ads_url}>
                  <img src={`${API_URL}/${item.file}`} alt="" />
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
