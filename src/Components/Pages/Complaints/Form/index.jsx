import React from "react";
import DashboardLayout from "../../../Layout";

const ComplaintsForm = () => {
  return (
    <DashboardLayout>
      <div className="brokers-single">
        <ul id="breadcrumb">
          <span>
            <span>
              <a href="#">Главная</a>|
              <span className="breadcrumb_last" aria-current="page">
                Жалобы
              </span>
            </span>
          </span>
        </ul>

        <div className="complaints">
          <h1>Пожаловатся</h1>
          <h2>Практика и анализ статистики</h2>

          <form
            action="#"
            className="complaints__form"
            method="post"
            // enctype="multipart/form-data"
          >
            <div>
              <p>Название брокера / биржи*</p>
              <input
                type="text"
                name="exchange-name"
                placeholder="Название"
                required
              />
            </div>
            <div>
              <p>Ссылка на сайт *</p>
              <input type="text" name="link" placeholder="Сайт" required />
            </div>
            <div>
              <p>Описание ситуация *</p>
              <textarea
                name="text"
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <div>
              <p>Прекрипить файл</p>
              <label className="label-file-complaints" >
                <img src="/images/Icons/upload.svg" alt="" />
                <span>Загрузить файл</span>
                <input name="file-complaints" type="file" />
              </label>
            </div>
            <div>
              <p>Ваш e-mail *</p>
              <input
                type="text"
                placeholder="e-mail"
                name="e-mail-complaints"
                required
              />
            </div>
            <button className="btn-blue" type="submit">
              Оставить жалобы
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComplaintsForm;
