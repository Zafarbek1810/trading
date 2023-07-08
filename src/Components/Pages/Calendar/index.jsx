import React from "react";
import DashboardLayout from "../../Layout";

const Calendar = () => {
  return (
    <DashboardLayout>
      <div className="calendar">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|
              <span className="breadcrumb_last" aria-current="page">
                Экономический календарь
              </span>
            </span>
          </span>
        </ul>

        <a href="#" className="glow-on-hover mb-4">
          Как оставить отзыв — узнать большее
          <img src="images/Icons/ArrowRight.svg" alt="" />
        </a>

        <h1>Economic Calendar</h1>

        <div className="calendar__filters">
          <div className="sel-box sel-one">
            <select>
              <option value="all" className="bg-opt">
                Фильтры
              </option>
              <option value="curr" className="bg-opt">
                Фильтры-2
              </option>
              <option value="crypto" className="bg-opt">
                Фильтры-3
              </option>
            </select>
          </div>

          <div className="sel-box sel-two">
            <select>
              <option value="all" className="bg-opt">
                21:15:16 (GMT + 3:00)
              </option>
              <option value="curr" className="bg-opt">
                23:15:16 (STV + 5:00)
              </option>
              <option value="crypto" className="bg-opt">
                02:15:16 (AV + 8:00)
              </option>
            </select>
          </div>
        </div>

        <div className="calendar__box">
          <div className="calendar__item">
            <div className="calendar__item-date">
              <p>30 Май</p>
              <p>Вторник</p>
            </div>

            <div className="calendar__item-event">
              <div className="calendar__item-event-left">
                <p>Выходной</p>
              </div>
              <div className="calendar__item-event-right">
                <img src="images/Icons/china.png" alt="" />
                <p>Китай - День труда</p>
              </div>
            </div>

            <div className="calendar__item-cont">
              <div className="calendar__item-cont-left">
                <div className="calendar__item-cont-left-top">
                  <p>04:30</p>
                  <p>CNY</p>
                </div>
                <div className="calendar__item-cont-left-bot">
                  <div className="circle">
                    <img src="images/Icons/yel-star.svg" alt="" />
                  </div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <img className="flag-min" src="images/Icons/china.png" alt="" />
                </div>
              </div>

              <div className="calendar__item-cont-right">
                <div className="calendar__item-cont-right-top">
                  <p>Композитный индекс PMI Китая (апр)</p>
                </div>

                <div className="calendar__item-cont-right-bot">
                  <div className="calendar__item-cont-right-bot-item">
                    <p>Факт:</p>
                    <span>54,4</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Прог:</p>
                    <span>0</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Пред:</p>
                    <span>57,0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="calendar__item-cont">
              <div className="calendar__item-cont-left">
                <div className="calendar__item-cont-left-top">
                  <p>04:30</p>
                  <p>CNY</p>
                </div>
                <div className="calendar__item-cont-left-bot">
                  <div className="circle">
                    <img src="images/Icons/yel-star.svg" alt="" />
                  </div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <img className="flag-min" src="images/Icons/china.png" alt="" />
                </div>
              </div>

              <div className="calendar__item-cont-right">
                <div className="calendar__item-cont-right-top">
                  <p>Композитный индекс PMI Китая (апр)</p>
                </div>

                <div className="calendar__item-cont-right-bot">
                  <div className="calendar__item-cont-right-bot-item">
                    <p>Факт:</p>
                    <span>54,4</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Прог:</p>
                    <span>0</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Пред:</p>
                    <span>57,0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="calendar__item-cont">
              <div className="calendar__item-cont-left">
                <div className="calendar__item-cont-left-top">
                  <p>04:30</p>
                  <p>CNY</p>
                </div>
                <div className="calendar__item-cont-left-bot">
                  <div className="circle">
                    <img src="images/Icons/yel-star.svg" alt="" />
                  </div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <img className="flag-min" src="images/Icons/china.png" alt="" />
                </div>
              </div>

              <div className="calendar__item-cont-right">
                <div className="calendar__item-cont-right-top">
                  <p>Композитный индекс PMI Китая (апр)</p>
                </div>

                <div className="calendar__item-cont-right-bot">
                  <div className="calendar__item-cont-right-bot-item">
                    <p>Факт:</p>
                    <span>54,4</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Прог:</p>
                    <span>0</span>
                  </div>

                  <div className="calendar__item-cont-right-bot-item">
                    <p>Пред:</p>
                    <span>57,0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="calendar__item">
            <div className="calendar__item-date">
              <p>30 Май</p>
              <p>Вторник</p>
            </div>

            <div className="calendar__item-event">
              <div className="calendar__item-event-left">
                <p>Выходной</p>
              </div>
              <div className="calendar__item-event-right">
                <img src="images/Icons/germany.png" alt="" />
                <p>Германия - День труда</p>
              </div>
            </div>

            <div className="calendar__item-cont calendar__item-cont-empty">
              <div className="calendar__item-cont-left">
                <h4>04:30</h4>
              </div>
              <div className="calendar__item-cont-right">
                <img src="images/Icons/germany.png" alt="" />
                <p>Германия - День труда</p>
              </div>
            </div>

            <div className="calendar__item-cont calendar__item-cont-empty">
              <div className="calendar__item-cont-left">
                <h4>04:30</h4>
              </div>
              <div className="calendar__item-cont-right">
                <img src="images/Icons/germany.png" alt="" />
                <p>Германия - День труда</p>
              </div>
            </div>

            <div className="calendar__item-cont calendar__item-cont-empty">
              <div className="calendar__item-cont-left">
                <h4>04:30</h4>
              </div>
              <div className="calendar__item-cont-right">
                <img src="images/Icons/germany.png" alt="" />
                <p>Германия - День труда</p>
              </div>
            </div>
          </div>
        </div>

        <a className="btn-more" href="#">
          <span>Загрузить еще</span>
        </a>

        <div className="home-top__right-reklam-block rekl-gradient mb-0 mt-5">
          <img src="images/Home-page/333.gif" alt="" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
