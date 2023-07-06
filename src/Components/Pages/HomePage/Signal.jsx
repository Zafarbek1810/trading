import React from "react";
import { SignalWrapper } from "./style";

const Signal = () => {
  return (
    <SignalWrapper>
      <div class="home-top__right-signal">
        <h4>Торговые сигналы</h4>
        <div class="home-top__right-signal-select">
          <div class="sel-box">
            <select>
              <option class="bg-opt">Инструменты</option>
              <option class="bg-opt">Инструменты-2</option>
              <option class="bg-opt">Инструменты-3</option>
            </select>
          </div>

          <div class="sel-box">
            <select>
              <option class="bg-opt">Сигналы</option>
              <option class="bg-opt">Сигналы-2</option>
              <option class="bg-opt">Сигналы-3</option>
            </select>
          </div>
        </div>

        <div class="signal-wrap">
          <div class="signal-item">
            <div class="signal-item-top">
              <p>Сегодня в 13:06 ( UTC+3 )</p>
              <span class="green"> Buy </span>
            </div>
            <div class="signal-item-center">
              <h5>AUDNZD H1</h5>
              <div class="box">
                <div class="signal-item-center-text">
                  <div class="green">TP:</div>
                  1.6331
                </div>
                <div class="signal-item-center-text">
                  <div class="red">SL:</div>
                  1.0711
                </div>
                <div class="signal-item-center-text">
                  <div class="blue">P:</div>
                  1.00661
                </div>
              </div>
            </div>

            <a class="orange-btn" href="Signal-single.html">
              Перейти к AUDNZD
            </a>
          </div>

          <div class="signal-item">
            <div class="signal-item-top">
              <p>Сегодня в 13:06 ( UTC+3 )</p>
              <span class="red"> Sell </span>
            </div>
            <div class="signal-item-center">
              <h5>AUDNZD H1</h5>
              <div class="box">
                <div class="signal-item-center-text">
                  <div class="green">TP:</div>
                  1.6331
                </div>
                <div class="signal-item-center-text">
                  <div class="red">SL:</div>
                  1.0711
                </div>
                <div class="signal-item-center-text">
                  <div class="blue">P:</div>
                  1.00661
                </div>
              </div>
            </div>

            <a class="orange-btn" href="#">
              {" "}
              Перейти к AUDNZD{" "}
            </a>
          </div>

          <div class="signal-item">
            <div class="signal-item-top">
              <p>Сегодня в 13:06 ( UTC+3 )</p>
              <span class="green"> Buy </span>
            </div>
            <div class="signal-item-center">
              <h5>AUDNZD H1</h5>
              <div class="box">
                <div class="signal-item-center-text">
                  <div class="green">TP:</div>
                  1.6331
                </div>
                <div class="signal-item-center-text">
                  <div class="red">SL:</div>
                  1.0711
                </div>
                <div class="signal-item-center-text">
                  <div class="blue">P:</div>
                  1.00661
                </div>
              </div>
            </div>

            <a class="orange-btn" href="#">
              {" "}
              Перейти к AUDNZD{" "}
            </a>
          </div>

          <div class="signal-item last">
            <div class="signal-item-top">
              <p>Сегодня в 13:06 ( UTC+3 )</p>
              <span class="red"> Sell </span>
            </div>
            <div class="signal-item-center">
              <h5>AUDNZD H1</h5>
              <div class="box">
                <div class="signal-item-center-text">
                  <div class="green">TP:</div>
                  1.6331
                </div>
                <div class="signal-item-center-text">
                  <div class="red">SL:</div>
                  1.0711
                </div>
                <div class="signal-item-center-text">
                  <div class="blue">P:</div>
                  1.00661
                </div>
              </div>
            </div>

            <a class="orange-btn" href="#">
              {" "}
              Перейти к AUDNZD{" "}
            </a>
          </div>

          <a class="btn-more" href="#">
            <span> Загрузить еще </span>
          </a>
        </div>
      </div>
    </SignalWrapper>
  );
};

export default Signal;
