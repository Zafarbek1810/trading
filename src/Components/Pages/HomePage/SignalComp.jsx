import React, { useEffect } from "react";
import { SignalWrapper } from "./style";
import MyLink from "../../Common/MyLink";
import CommonProviders from "../../../Data/Providers/CommonProviders";
import axios from "axios";

const SignalComp = () => {
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
      url: "http://91.200.148.144:8000/api/ads/",
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

  return (
    <SignalWrapper>
      <div className="home-top__right-signal">
        <h4>Торговые сигналы</h4>
        <div className="home-top__right-signal-select">
          <div className="sel-box">
            <select>
              <option className="bg-opt">Инструменты</option>
              <option className="bg-opt">Инструменты-2</option>
              <option className="bg-opt">Инструменты-3</option>
            </select>
          </div>

          <div className="sel-box">
            <select>
              <option className="bg-opt">Сигналы</option>
              <option className="bg-opt">Сигналы-2</option>
              <option className="bg-opt">Сигналы-3</option>
            </select>
          </div>
        </div>

        <div className="signal-wrap">
          <div className="signal-item">
            <div className="signal-item-top">
              <p>Сегодня в 13:06 ( UTC+3 )</p>
              <span className="green"> Buy </span>
            </div>
            <div className="signal-item-center">
              <h5>AUDNZD H1</h5>
              <div className="box">
                <div className="signal-item-center-text">
                  <div className="green">TP:</div>
                  1.6331
                </div>
                <div className="signal-item-center-text">
                  <div className="red">SL:</div>
                  1.0711
                </div>
                <div className="signal-item-center-text">
                  <div className="blue">P:</div>
                  1.00661
                </div>
              </div>
            </div>

            <MyLink className="orange-btn" to="/signal-single">
              Перейти к AUDNZD
            </MyLink>
          </div>

          <div className="signal-item">
            <div className="signal-item-top">
              <p>Сегодня в 13:06 ( UTC+3 )</p>
              <span className="red"> Sell </span>
            </div>
            <div className="signal-item-center">
              <h5>AUDNZD H1</h5>
              <div className="box">
                <div className="signal-item-center-text">
                  <div className="green">TP:</div>
                  1.6331
                </div>
                <div className="signal-item-center-text">
                  <div className="red">SL:</div>
                  1.0711
                </div>
                <div className="signal-item-center-text">
                  <div className="blue">P:</div>
                  1.00661
                </div>
              </div>
            </div>

            <MyLink className="orange-btn" to="/signal-single">
              Перейти к AUDNZD
            </MyLink>
          </div>

          <div className="signal-item">
            <div className="signal-item-top">
              <p>Сегодня в 13:06 ( UTC+3 )</p>
              <span className="green"> Buy </span>
            </div>
            <div className="signal-item-center">
              <h5>AUDNZD H1</h5>
              <div className="box">
                <div className="signal-item-center-text">
                  <div className="green">TP:</div>
                  1.6331
                </div>
                <div className="signal-item-center-text">
                  <div className="red">SL:</div>
                  1.0711
                </div>
                <div className="signal-item-center-text">
                  <div className="blue">P:</div>
                  1.00661
                </div>
              </div>
            </div>

            <MyLink className="orange-btn" to="/signal-single">
              Перейти к AUDNZD
            </MyLink>
          </div>

          <div className="signal-item last">
            <div className="signal-item-top">
              <p>Сегодня в 13:06 ( UTC+3 )</p>
              <span className="red"> Sell </span>
            </div>
            <div className="signal-item-center">
              <h5>AUDNZD H1</h5>
              <div className="box">
                <div className="signal-item-center-text">
                  <div className="green">TP:</div>
                  1.6331
                </div>
                <div className="signal-item-center-text">
                  <div className="red">SL:</div>
                  1.0711
                </div>
                <div className="signal-item-center-text">
                  <div className="blue">P:</div>
                  1.00661
                </div>
              </div>
            </div>

            <MyLink className="orange-btn" to="/signal-single">
              Перейти к AUDNZD
            </MyLink>
          </div>

          <a className="btn-more" href="#">
            <span> Загрузить еще </span>
          </a>
        </div>
      </div>
    </SignalWrapper>
  );
};

export default SignalComp;
