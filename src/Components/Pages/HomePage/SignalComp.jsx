import React, { useEffect, useState } from "react";
import { SignalWrapper } from "./style";
import MyLink from "../../Common/MyLink";
import CommonProviders from "../../../Data/Providers/CommonProviders";
import axios from "axios";
import { useTranslation } from "react-i18next";
import moment from "moment";

const SignalComp = () => {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    CommonProviders.getAds()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios({
      method: "get",
      url: "https://inlisting.io/io/backend/ads/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    // CommonProviders.getAds()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios({
      method: "get",
      url: "https://inlisting.io/io/backend/currency/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res, "curr");
        setCurrency(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fcsapi.com/api-v3/stock/history?id=13&period=5m&access_key=9NRLacyHP67pfp7gEwcrNLI",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SignalWrapper>
      <div className="home-top__right-signal">
        {/* <h4>{t("homepage.signalTitle")}</h4>
        <div className="home-top__right-signal-select">
          <div className="sel-box">
            <select>
              <option className="bg-opt">{t("homepage.tools")}</option>
              <option className="bg-opt">{t("homepage.tools")}-2</option>
              <option className="bg-opt">{t("homepage.tools")}-3</option>
            </select>
          </div>

          <div className="sel-box">
            <select>
              <option className="bg-opt">{t("homepage.signal")}</option>
              <option className="bg-opt">{t("homepage.signal")}-2</option>
              <option className="bg-opt">{t("homepage.signal")}-3</option>
            </select>
          </div>
        </div> */}

        <div className="signal-wrap">
          {currency.map((item, index) => (
            <div className="signal-item" key={index}>
              <div className="signal-item-top">
                <p>{moment(item.created_at).format("DD.MM.YYYY HH:mm")}</p>
                {item.buyorsell === "1" ? (
                  <span className="green">BUY </span>
                ) : (
                  <span className="red">SELL</span>
                )}
              </div>
              <div className="signal-item-center">
                <h5>{item.symbol}</h5>
                <div className="box">
                  <div className="signal-item-center-text">
                    <div className="green">TP:</div>
                    {item.takeprofit}
                  </div>
                  <div className="signal-item-center-text">
                    <div className="red">SL:</div>
                    {item.stoploss}
                  </div>
                  <div className="signal-item-center-text">
                    <div className="blue">P:</div>
                    {item.profit}
                  </div>
                </div>
              </div>

              <MyLink
                className="orange-btn"
                to={`/signal-single?key=${item.symbol}`}
              >
                {t("homepage.go")} {item.symbol}
              </MyLink>
            </div>
          ))}
          <a className="btn-more" href="#">
            <span>{t("homepage.more")}</span>
          </a>
        </div>
      </div>
    </SignalWrapper>
  );
};

export default SignalComp;
