import React from "react";
import DashboardLayout from "../../Layout";
import { CoursesWrapper } from "./style";

const Courses = () => {
  return (
    <DashboardLayout>
      <CoursesWrapper className="courses">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|
              <span className="breadcrumb_last" aria-current="page">
                Обучающие курсы
              </span>
            </span>
          </span>
        </ul>

        <div className="courses__top">
          <h1>Обучающие курсы</h1>
          <p>Здесь вы можете найти обучающие курсы по разным направлениям...</p>
        </div>

        <div className="courses__content">
          <p className="courses__content-text">
            Мы хотим, чтобы каждый мог позволить себе освоить современные
            направления.  
          </p>

          <div className="courses__box">
            <div className="courses__item">
              <div
                className="courses__item-nft-bg"
              ></div>
              <div className="courses__item-left">
                <h3>СЕКРЕТЫ NFT: ОТ 100$ ДО 10,000$ В МЕСЯЦ</h3>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Чему вы научитесь? 
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Почему этот курс лучший? 
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Описание
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    NFT (Non-Fungible Token) - это уникальный цифровой актив,
                    который записывается в блокчейне и не может быть заменен или
                    повторен. В последнее время NFT стали популярным способом
                    продажи цифрового искусства, музыки, видео и игр.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, deleniti. Facilis, impedit aspernatur! Aspernatur
                    quae, est sed fugiat tenetur hic earum reprehenderit, esse
                    et ex, ad consequuntur laboriosam eaque sint.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti nam dolores distinctio. Perferendis vitae
                    cupiditate atque consequatur, illo consectetur quasi sint
                    vero tempore iusto fugiat minima omnis tenetur molestias
                    fuga ipsum numquam expedita voluptatem a accusamus suscipit
                    nostrum? Harum doloribus tenetur nobis amet optio molestias
                    ipsam perspiciatis voluptates tempore beatae!
                  </div>
                </div>

                <div className="courses__item-left-bot">
                  <div className="courses__item-left-bot-price">
                    <p>Стоимость курса:</p>
                    <h6>500$</h6>
                  </div>
                  <div className="courses__item-left-bot-btn">
                    <a className="orange-btn" href="#">
                      Получить курс
                    </a>
                  </div>
                </div>
              </div>
              <div className="courses__item-right">
                <a href="#">
                  <img src="images/Icons/soc-tg.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="courses__item">
              <div
                className="courses__item-crypto-bg"
              ></div>
              <div className="courses__item-left">
                <h3>P2P КРИПТО  АРБИТРАЖ С НУЛЯ </h3>

                <ul className="nav nav-tabs" id="myTab2" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#home2"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Чему вы научитесь? 
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#profile2"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Почему этот курс лучший? 
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#contact2"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Описание
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent2">
                  <div
                    className="tab-pane fade show active"
                    id="home2"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    NFT (Non-Fungible Token) - это уникальный цифровой актив,
                    который записывается в блокчейне и не может быть заменен или
                    повторен. В последнее время NFT стали популярным способом
                    продажи цифрового искусства, музыки, видео и игр.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile2"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, deleniti. Facilis, impedit aspernatur! Aspernatur
                    quae, est sed fugiat tenetur hic earum reprehenderit, esse
                    et ex, ad consequuntur laboriosam eaque sint.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact2"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti nam dolores distinctio. Perferendis vitae
                    cupiditate atque consequatur, illo consectetur quasi sint
                    vero tempore iusto fugiat minima omnis tenetur molestias
                    fuga ipsum numquam expedita voluptatem a accusamus suscipit
                    nostrum? Harum doloribus tenetur nobis amet optio molestias
                    ipsam perspiciatis voluptates tempore beatae!
                  </div>
                </div>

                <div className="courses__item-left-bot">
                  <div className="courses__item-left-bot-price">
                    <p>Стоимость курса:</p>
                    <h6>670$</h6>
                  </div>
                  <div className="courses__item-left-bot-btn">
                    <a className="orange-btn" href="#">
                      Получить курс
                    </a>
                  </div>
                </div>
              </div>
              <div className="courses__item-right">
                <a href="#">
                  <img src="images/Icons/soc-tg.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="courses__item">
              <div
                className="courses__item-app-bg"
              ></div>
              <div className="courses__item-left">
                <h3>ОСНОВЫ FOREX-ТРЕЙДИНГА </h3>

                <ul className="nav nav-tabs" id="myTab3" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab3"
                      data-bs-toggle="tab"
                      data-bs-target="#home3"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Чему вы научитесь? 
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab3"
                      data-bs-toggle="tab"
                      data-bs-target="#profile3"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Почему этот курс лучший? 
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab3"
                      data-bs-toggle="tab"
                      data-bs-target="#contact3"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Описание
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent3">
                  <div
                    className="tab-pane fade show active"
                    id="home3"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    NFT (Non-Fungible Token) - это уникальный цифровой актив,
                    который записывается в блокчейне и не может быть заменен или
                    повторен. В последнее время NFT стали популярным способом
                    продажи цифрового искусства, музыки, видео и игр.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile3"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, deleniti. Facilis, impedit aspernatur! Aspernatur
                    quae, est sed fugiat tenetur hic earum reprehenderit, esse
                    et ex, ad consequuntur laboriosam eaque sint.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact3"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti nam dolores distinctio. Perferendis vitae
                    cupiditate atque consequatur, illo consectetur quasi sint
                    vero tempore iusto fugiat minima omnis tenetur molestias
                    fuga ipsum numquam expedita voluptatem a accusamus suscipit
                    nostrum? Harum doloribus tenetur nobis amet optio molestias
                    ipsam perspiciatis voluptates tempore beatae!
                  </div>
                </div>

                <div className="courses__item-left-bot">
                  <div className="courses__item-left-bot-price">
                    <p>Стоимость курса:</p>
                    <h6>860$</h6>
                  </div>
                  <div className="courses__item-left-bot-btn">
                    <a className="orange-btn" href="#">
                      Получить курс
                    </a>
                  </div>
                </div>
              </div>
              <div className="courses__item-right">
                <a href="#">
                  <img src="images/Icons/soc-tg.svg" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="courses__why">
            <h4>Почему не бесплатно? </h4>
            <p>
              Наша команда предлагает все бесплатно для своих пользователей.
              Символическая плата за курс...
            </p>
            <h5>Для того, чтобы приобрести курсы, свяжитесь с нами  &darr;</h5>
            <a className="tg-btn-call" href="#">
              <img src="images/Icons/soc-tg.svg" alt="" />
              свяжитесь с нами 
            </a>
          </div>
        </div>
      </CoursesWrapper>
    </DashboardLayout>
  );
};

export default Courses;
