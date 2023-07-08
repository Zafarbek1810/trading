import React from "react";
import DashboardLayout from "../../Layout";
import Company from "./Company";
import FAQ from "./FAQ";
import { HomePageWrapper } from "./style";
import SignalComp from "./SignalComp";


const HomePage = () => {
  return (
    <DashboardLayout>
      <HomePageWrapper>
      <div className="home-page-wrap">
        <h1>Самые честные обзоры на брокеров</h1>
        <div className="home-top__right-reklam-block rekl-gradient">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
        <SignalComp/>
        <Company/>
        <FAQ/>
      </div>
      </HomePageWrapper>
    </DashboardLayout>
  );
};

export default HomePage;
