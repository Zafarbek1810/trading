import React from 'react';
import DashboardLayout from '../../Layout';

const PublishingThemes = () => {
    return (
        <DashboardLayout>
            <div className="brokers-single">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|<a href="#">Форум</a>|
              <span className="breadcrumb_last" aria-current="page">
                Форум Форма
              </span>
            </span>
          </span>
        </ul>

        <div className="new__theme">
          <h1>Опубликуйте Ваш Коментарий</h1>
          <form className="form-theme" action="#" method="post">
            <div>
              <p>Введите свое имя*</p>
              <input
                placeholder="Ваше имя"
                name="username"
                type="text"
                required
              />
            </div>
            <div>
              <p>Электронная почта*</p>
              <input placeholder="E-mail" name="email" type="email" required />
            </div>

            <div>
              <p>Напишите Ваш коментарий*</p>
              <textarea
                placeholder="Описание"
                name="text"
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <div>
              <p>Прикрепить файлы</p>
              <label className="label-file" >
                <img src="/images/Icons/upload.svg" alt="" />
                <span>Загрузить файл</span>
                <input name="file" type="file" />
              </label>
            </div>
            <button className="btn-blue" type="submit">
              Отправить
            </button>
          </form>
        </div>

        <div className="home-top__right-reklam-block rekl-gradient mb-0 mt-5">
          <img src="/images/Home-page/333.gif" alt="" />
        </div>
      </div>
        </DashboardLayout>
    );
};

export default PublishingThemes;