import React from "react";
import DashboardLayout from "../../Layout";

const NewsSingle = () => {
  return (
    <DashboardLayout>
      <div className="news-single">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|<a href="#">Новости</a>|
              <span className="breadcrumb_last" aria-current="page">
                Сингл
              </span>
            </span>
          </span>
        </ul>

        <div className="news-single__top">
          <h1>
            DXY: Dollar Regains Momentum to 7-week High as Naysayers Get Knocked
          </h1>
          <p>May 19 / 2023</p>
        </div>

        <div className="news-single__cont">
          <img src="/images/News-single/top-img.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            autem quod rem doloribus exercitationem expedita libero eos tempora
            reiciendis veritatis nesciunt numquam eaque officia perferendis
            animi inventore architecto et placeat tempore obcaecati veniam
            dignissimos! Similique quam quod illum architecto aspernatur.
          </p>

          <p>
            The dollar index climbed to a peak of 103.70 as short-sellers were
            caught off guard amid a flurry of events.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            voluptas eum. Tempora eveniet adipisci sit assumenda exercitationem
            quam. Quaerat quam minus corrupti odit alias sint, sed maxime
            repellat, accusantium tenetur dolorum aperiam voluptas sunt ipsum
            voluptate reiciendis velit consequuntur fuga suscipit officia. A
            voluptates pariatur labore ipsa quaerat! Dolorum quis, reprehenderit
            fuga architecto veniam neque quam cupiditate alias quidem porro?
            Numquam debitis fugiat sequi doloribus, cupiditate autem reiciendis
            minima dolores ex ducimus quisquam soluta in eveniet eligendi quia.
            Rerum dolorem quam maxime sed odit reiciendis atque totam nulla
            corrupti temporibus, numquam ullam reprehenderit suscipit, quasi
            obcaecati excepturi vitae aliquid ipsam.
          </p>
          <ul>
            <li>
              The US dollar index (DXY) pushed strongly to the upside on
              Thursday as fresh economic data and debt-ceiling progress boosted
              momentum. The index, measuring the relative value of the dollar
              against a basket of major currencies, marched higher by roughly
              0.9% to 103.70, hitting a seven-week high.
            </li>
            <li>
              What’s driving the narrative in the dollar rally? Short-sellers
              were caught off guard as they were betting on the Fed’s hints for
              a rate pause to dampen demand for the buck. Incoming data,
              however, is suggesting that the US central bank might not pare
              back its efforts just yet – jobless claims came in
              lower-than-expected at 242,000 against forecasts of 254,000.
              What’s more, congressional leaders are optimistic they may reach a
              deal on lifting the $31.4tn US debt ceiling to avoid a sovereign
              default. In that environment, the EUR/USD slipped for a
              third-straight day to $1.0760, while the USD/JPY shot up to levels
              near ¥139.00.
            </li>
          </ul>
        </div>

        <div className="home-top__right-reklam-block rekl-gradient">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewsSingle;
