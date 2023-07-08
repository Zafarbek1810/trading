import React from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";

const Forum = () => {
  return (
    <DashboardLayout>
      <div className="forum">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|
              <span className="breadcrumb_last" aria-current="page">
                Форум
              </span>
            </span>
          </span>
        </ul>

        <div className="forum__top">
          <div className="box">
            <h1>Форум</h1>
            <p>
              На нашем форуме вы можете участвовать в обсуждении любой темы...
            </p>
          </div>

          <MyLink className="add-btn" to="/publish-theme">
            <img src="/images/Icons/plus.svg" alt="" />
            Добавить тему
          </MyLink>
        </div>

        <div className="forum__box">
          <MyLink to="/forum-single" className="forum__item">
            <div className="forum__item-top">
              <p>добавлено: сегодня</p>
              <h4>Тема: Вывод средств в ALPARI </h4>
            </div>

            <div className="forum__item-center">
              <img src="/images/Forum/f1.jpg" alt="" />
            </div>

            <div className="forum__item-bottom">
              <div className="author">
                <img src="/images/Forum/user1.jpg" alt="" />
                <div className="author-cont">
                  <h6>Александра</h6>
                  <p>автор</p>
                </div>
              </div>
              <object>
                <MyLink to="/add-comment">оставить комент</MyLink>
              </object>
            </div>
          </MyLink>

          <MyLink to="/forum-single" className="forum__item">
            <div className="forum__item-top">
              <p>21/01/2023</p>
              <h4>Тема: Вывод средств в ALPARI </h4>
            </div>

            <div className="forum__item-center">
              <img src="/images/Forum/f2.jpg" alt="" />
            </div>

            <div className="forum__item-bottom">
              <div className="author">
                <img src="/images/Forum/user2.png" alt="" />
                <div className="author-cont">
                  <h6>Вася Пупкин</h6>
                  <p>автор</p>
                </div>
              </div>
              <object>
              <MyLink to="/add-comment">оставить комент</MyLink>
              </object>
            </div>
          </MyLink>

          <MyLink to="/forum-single" className="forum__item">
            <div className="forum__item-top">
              <p>добавлено: вчера</p>
              <h4>Тема: Вывод средств в ALPARI </h4>
            </div>

            <div className="forum__item-center">
              <img src="/images/Forum/f3.jpg" alt="" />
            </div>

            <div className="forum__item-bottom">
              <div className="author">
                <img src="/images/Forum/user1.jpg" alt="" />
                <div className="author-cont">
                  <h6>Александра</h6>
                  <p>автор</p>
                </div>
              </div>
              <object>
              <MyLink to="/add-comment">оставить комент</MyLink>
              </object>
            </div>
          </MyLink>

          <MyLink to="/forum-single" className="forum__item">
            <div className="forum__item-top">
              <p>02/03/2023</p>
              <h4>Тема: Вывод средств в ALPARI </h4>
            </div>

            <div className="forum__item-center">
              <img src="/images/Forum/f4.jpg" alt="" />
            </div>

            <div className="forum__item-bottom">
              <div className="author">
                <img src="/images/Forum/user2.png" alt="" />
                <div className="author-cont">
                  <h6>Вася Пупкин</h6>
                  <p>автор</p>
                </div>
              </div>
              <object>
              <MyLink to="/add-comment">оставить комент</MyLink>
              </object>
            </div>
          </MyLink>

          <MyLink to="/forum-single" className="forum__item">
            <div className="forum__item-top">
              <p>добавлено: сегодня</p>
              <h4>Тема: Вывод средств в ALPARI </h4>
            </div>

            <div className="forum__item-center">
              <img src="/images/Forum/f5.jpg" alt="" />
            </div>

            <div className="forum__item-bottom">
              <div className="author">
                <img src="/images/Forum/user1.jpg" alt="" />
                <div className="author-cont">
                  <h6>Александра</h6>
                  <p>автор</p>
                </div>
              </div>
              <object>
              <MyLink to="/add-comment">оставить комент</MyLink>
              </object>
            </div>
          </MyLink>

          <MyLink to="/forum-single"className="forum__item">
            <div className="forum__item-top">
              <p>добавлено: сегодня</p>
              <h4>Тема: Вывод средств в ALPARI </h4>
            </div>

            <div className="forum__item-center">
              <img src="/images/Forum/f6.jpg" alt="" />
            </div>

            <div className="forum__item-bottom">
              <div className="author">
                <img src="/images/Forum/user1.jpg" alt="" />
                <div className="author-cont">
                  <h6>Александра</h6>
                  <p>автор</p>
                </div>
              </div>
              <object>
              <MyLink to="/add-comment">оставить комент</MyLink>
              </object>
            </div>
          </MyLink>
        </div>

        <a className="btn-more-blue" href="#">
          <span>Загрузить еще</span>
        </a>

        <div className="home-top__right-reklam-block rekl-gradient">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Forum;
