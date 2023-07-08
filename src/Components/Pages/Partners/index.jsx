import React from "react";
import DashboardLayout from "../../Layout";

const Partners = () => {
  return (
    <DashboardLayout>
      <div className="partners">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|
              <span className="breadcrumb_last" aria-current="page">
                Наши партнеры
              </span>
            </span>
          </span>
        </ul>

        <div className="partners__top">
          <h1>Наши партнеры</h1>
          <p>Следите за событиями в режиме реального времени</p>
        </div>

        <div className="partners__box">
          <a href="#" className="partners__item">
            <div className="partners__item-img-box">
              <img src="/images/Partners/p1.png" alt="" />
            </div>
            <div className="partners__item-cont">
              <h5>Arken</h5>
              <p className="partners-text">
                Саудовская Аравия собирается в очередной раз...
              </p>
              <div className="partners__item-arr">
                <img src="/images/Partners/arr-right.svg" alt="" />
              </div>
            </div>
          </a>

          <a href="#" className="partners__item">
            <div className="partners__item-img-box">
              <img src="/images/Partners/p1.png" alt="" />
            </div>
            <div className="partners__item-cont">
              <h5>Arken</h5>
              <p className="partners-text">
                Саудовская Аравия собирается в очередной раз...
              </p>
              <div className="partners__item-arr">
                <img src="/images/Partners/arr-right.svg" alt="" />
              </div>
            </div>
          </a>

          <a href="#" className="partners__item">
            <div className="partners__item-img-box">
              <img src="/images/Partners/p1.png" alt="" />
            </div>
            <div className="partners__item-cont">
              <h5>Arken</h5>
              <p className="partners-text">
                Саудовская Аравия собирается в очередной раз...
              </p>
              <div className="partners__item-arr">
                <img src="/images/Partners/arr-right.svg" alt="" />
              </div>
            </div>
          </a>

          <a href="#" className="partners__item">
            <div className="partners__item-img-box">
              <img src="/images/Partners/p1.png" alt="" />
            </div>
            <div className="partners__item-cont">
              <h5>Arken</h5>
              <p className="partners-text">
                Саудовская Аравия собирается в очередной раз...
              </p>
              <div className="partners__item-arr">
                <img src="/images/Partners/arr-right.svg" alt="" />
              </div>
            </div>
          </a>

          <a href="#" className="partners__item">
            <div className="partners__item-img-box">
              <img src="/images/Partners/p1.png" alt="" />
            </div>
            <div className="partners__item-cont">
              <h5>Arken</h5>
              <p className="partners-text">
                Саудовская Аравия собирается в очередной раз...
              </p>
              <div className="partners__item-arr">
                <img src="/images/Partners/arr-right.svg" alt="" />
              </div>
            </div>
          </a>

          <a href="#" className="partners__item">
            <div className="partners__item-img-box">
              <img src="/images/Partners/p1.png" alt="" />
            </div>
            <div className="partners__item-cont">
              <h5>Arken</h5>
              <p className="partners-text">
                Саудовская Аравия собирается в очередной раз...
              </p>
              <div className="partners__item-arr">
                <img src="/images/Partners/arr-right.svg" alt="" />
              </div>
            </div>
          </a>
        </div>

        <div className="home-top__right-reklam-block rekl-gradient">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Partners;
