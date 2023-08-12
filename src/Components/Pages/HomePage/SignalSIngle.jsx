import React, { lazy, useEffect, useState } from "react";
import DashboardLayout from "../../Layout";
import axios from "axios";
import { API_URL, IMG_URL } from "../../../HHTP/clients";

import { SingleWrapper } from "./style";
import { useRouter } from "next/router";
const TradingView = lazy(()=> import("./TradingView"))

const SignalSIngle = () => {
  const [ads, setAds] = useState([]);
  const router = useRouter();
  const [view, setView] = useState(false);

  useEffect(()=>{
      setView(true);
  }, [])

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
      <SingleWrapper>
        <div className="signal-single">
          <ul id="breadcrumb">
            <span>
              <span>
                <a href="#">Главная</a>|
                <span className="breadcrumb_last" aria-current="page">
                  {router.query.key}
                </span>
              </span>
            </span>
          </ul>

          <div className="signal-single__top mb-5">
            {view && <TradingView/>}
          </div>

          {/* <div className="signal-single__top">
          <img src="/images/Signal-single/top-img.svg" alt="" />
          <div className="signal-single__top-cont">
            <div className="top">
              <p>Сегодня в 13:06 ( UTC+3 )</p>
            </div>
            <div className="bot">
              <h5>AUDNZD H1</h5>
              <div className="bot-item">
                <p className="green">TP:</p>
                <p>1.6331</p>
              </div>
              <div className="bot-item">
                <p className="red">SL:</p>
                <p>1.0711</p>
              </div>
              <div className="bot-item">
                <p className="blue">P:</p>
                <p>1.00661</p>
              </div>
            </div>
          </div>
        </div> */}

          {/* <div className="signal-single-list">
            <ul className="list-top">
              <li>01:00</li>
              <li>03:30</li>
              <li>05:00</li>
              <li>07:30</li>
              <li>09:00</li>
              <li>11:30</li>
              <li>13:00</li>
            </ul>

            <ul className="list-bot">
              <li className="active">
                <div className="box">
                  <h5>Сегодня</h5>
                  <p className="red">-0.27%</p>
                </div>
              </li>
              <li className="">
                <div className="box">
                  <h5>За неделю</h5>
                  <p className="green">0.15%</p>
                </div>
              </li>
              <li className="">
                <div className="box">
                  <h5>Месяц</h5>
                  <p className="green">0.15%</p>
                </div>
              </li>
              <li className="">
                <div className="box">
                  <h5>6 Месяцев</h5>
                  <p className="red">-2.03%</p>
                </div>
              </li>
              <li className="">
                <div className="box">
                  <h5>С начала года</h5>
                  <p className="red">-0.32%</p>
                </div>
              </li>
              <li className="">
                <div className="box">
                  <h5>Год</h5>
                  <p className="red">-3.29%</p>
                </div>
              </li>
              <li className="">
                <div className="box">
                  <h5>За всё время</h5>
                  <p className="red">-21.66%</p>
                </div>
              </li>
            </ul>
          </div> */}

          {ads
            .filter((cat) => cat.category_id === 4)
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

          {/* <div className="methods">
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
        </div> */}
        </div>
      </SingleWrapper>
    </DashboardLayout>
  );
};

export default SignalSIngle;
