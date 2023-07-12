import React, { useState } from "react";
import DashboardLayout from "../../Layout";

const Calculator = () => {
  const [value, setValue] = useState();

  if (value === "all") {
    document.querySelector(".calc-currency").style.display = "block";
    document.querySelector(".calc-crypto").style.display = "block";
    document.querySelector(".calc-multy").style.display = "block";
  } else if (value === "curr") {
    document.querySelector(".calc-currency").style.display = "block";
    document.querySelector(".calc-crypto").style.display = "none";
    document.querySelector(".calc-multy").style.display = "none";
  } else if (value === "crypto") {
    document.querySelector(".calc-currency").style.display = "none";
    document.querySelector(".calc-crypto").style.display = "block";
    document.querySelector(".calc-multy").style.display = "none";
  } else if (value === "multy") {
    document.querySelector(".calc-currency").style.display = "none";
    document.querySelector(".calc-crypto").style.display = "none";
    document.querySelector(".calc-multy").style.display = "block";
  }

  console.log(value);
  return (
    <DashboardLayout>
      <div className="calculator">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|
              <span className="breadcrumb_last" aria-current="page">
                Мультивалютный калькулятор
              </span>
            </span>
          </span>
        </ul>

        <a href="#" className="glow-on-hover mb-4">
          Как оставить отзыв — узнать большее
          <img src="/images/Icons/ArrowRight.svg" alt="" />
        </a>

        <h1>Мультивалютный калькулятор</h1>

        <div className="calc">
          <div className="calc__top">
            <p>Калькулятор</p>

            <form
              className="sel-box"
              onChange={(e) => setValue(e.target.value)}
            >
              <select id="calculator-select">
                <option value="all" className="bg-opt">
                  Все
                </option>
                <option value="curr" className="bg-opt">
                  Калькулятор валют
                </option>
                <option value="crypto" className="bg-opt">
                  Калькулятор криптовалют
                </option>
                <option value="multy" className="bg-opt">
                  Мультивалютный калькулятор
                </option>
              </select>
            </form>
          </div>

          <div className="calc__center">
            <div className="calc__item calc-currency" data-calc="curr">
              <p>Калькулятор валют</p>

              <div className="form-currency">
                <div className="calc__item-box">
                  <div className="calc__item-left">
                    <input
                      type="number"
                      name="amountCurrency"
                      id="amountCurrency"
                      required
                      placeholder="100"
                    />
                    <div className="sel-box">
                      <select
                        className="select"
                        name="fromCurrency"
                        id="fromCurrency"
                        required
                      >
                        <option
                          value=""
                          disabled
                          selected
                          hidden
                          className="bg-opt"
                        >
                          Currency
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="calc__item-center">
                    <button
                      type="button"
                      className="calc__item-center-img-box"
                      id="swapButton"
                    >
                      <img src="/images/Icons/ArrowsLeftRight.svg" alt="" />
                    </button>
                  </div>

                  <div className="calc__item-right">
                    <input
                      type="text"
                      id="result"
                      required
                      placeholder="100"
                      disabled
                    />
                    <div className="sel-box">
                      <select
                        className="select"
                        name="toCurrency"
                        id="toCurrency"
                        required
                      >
                        <option
                          value=""
                          disabled
                          selected
                          hidden
                          className="bg-opt"
                        >
                          Currency
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="calc__item calc-crypto" data-calc="crypto">
              <p>Калькулятор криптовалют</p>

              <div className="form-crypto">
                <div className="calc__item-box">
                  <div className="calc__item-left">
                    <input
                      type="number"
                      name="amount-crypto"
                      id="amount-crypto"
                      required
                      placeholder="100"
                    />
                    <div className="sel-box">
                      <select
                        className="select"
                        name="from-crypto"
                        id="from-crypto"
                        required
                      >
                        <option
                          value=""
                          disabled
                          selected
                          hidden
                          className="bg-opt"
                        >
                          Crypto
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="calc__item-center">
                    <button
                      className="calc__item-center-img-box"
                      id="swap-crypto"
                      type="button"
                    >
                      <img src="/images/Icons/ArrowsLeftRight.svg" alt="" />
                    </button>
                  </div>

                  <div className="calc__item-right">
                    <input
                      type="text"
                      id="result-crypto"
                      required
                      placeholder="100"
                      disabled
                    />
                    <div className="sel-box">
                      <select
                        className="select"
                        name="to-crypto"
                        id="to-crypto"
                        required
                      >
                        <option
                          value=""
                          disabled
                          selected
                          hidden
                          className="bg-opt"
                        >
                          Crypto
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="calc__item calc-multy" data-calc="multy">
              <p>Мультивалютный калькулятор</p>

              <div className="form-multy">
                <div className="calc__item-box">
                  <div className="calc__item-left">
                    <input
                      type="number"
                      name="amount-multy"
                      id="amount-multy"
                      required
                      placeholder="100"
                    />
                    <div className="sel-box select-parent-1">
                      <select
                        className="select"
                        name="from-multy"
                        id="from-multy"
                        required
                      >
                        <option
                          value=""
                          disabled
                          selected
                          hidden
                          className="bg-opt"
                        >
                          Crypto
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="calc__item-center">
                    <button
                      className="calc__item-center-img-box"
                      id="swap-multy"
                    >
                      <img src="/images/Icons/ArrowsLeftRight.svg" alt="" />
                    </button>
                  </div>

                  <div className="calc__item-right">
                    <input
                      type="text"
                      id="result-multy"
                      required
                      placeholder="100"
                      disabled
                    />
                    <div className="sel-box select-parent-2">
                      <select
                        className="select"
                        name="to-multy"
                        id="to-multy"
                        required
                      >
                        <option
                          value=""
                          disabled
                          selected
                          hidden
                          className="bg-opt"
                        >
                          Currency
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="test"></div>

        <div className="methods">
          <div className="title">
            <h3>Методы</h3>
            <p>Практика и анализ статистики</p>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga
              molestias incidunt dolores laborum culpa, fugiat ipsa enim quia, a
              ipsam optio reiciendis voluptate odit doloremque quas est
              distinctio ab nam? In debitis molestias laboriosam voluptatibus
              quibusdam maiores?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              corrupti similique voluptate magni dignissimos aut dolorem aperiam
              nihil, laborum vitae.
            </p>
          </div>

          <div className="item-links">
            <div className="num">01</div>
            <div className="links">
              <h5>Интро</h5>
              <ul>
                <li>
                  <a href="#">Принципы & Практика</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="item-links">
            <div className="num">02</div>
            <div className="links">
              <h5>Отзывы</h5>
              <ul>
                <li>
                  <a href="#">Отзывы профессиналов</a>
                </li>
                <li>
                  <a href="#">Отзывы Любителей</a>
                </li>
                <li>
                  <a href="#">Отзывы Компаний</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Calculator;
