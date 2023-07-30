import React from "react";
import DashboardLayout from "../../../Layout";
import MyLink from "../../../Common/MyLink";
import { useTranslation } from "react-i18next";

const ComplaintsForm = () => {
  const {t}=useTranslation();

  return (
    <DashboardLayout>
      <div className="brokers-single">
        <ul id="breadcrumb">
          <span>
            <span>
            <MyLink to="/">{t('header.navbar.home')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t('complaints.title')}
              </span>
            </span>
          </span>
        </ul>

        <div className="complaints">
          <h1>{t('complaints.btn')}</h1>
          <h2>{t('complaints.form.title')}</h2>

          <form
            action="#"
            className="complaints__form"
            method="post"
            // enctype="multipart/form-data"
          >
            <div>
              <p>{t('complaints.form.input1')}*</p>
              <input
                type="text"
                name="exchange-name"
                placeholder={t('complaints.form.placeholder1')}
                required
              />
            </div>
            <div>
              <p>{t('complaints.form.input2')} *</p>
              <input type="text" name="link" placeholder={t('complaints.form.placeholder2')} required />
            </div>
            <div>
              <p>{t('complaints.form.input3')} *</p>
              <textarea
                name="text"
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <div>
              <p>{t('complaints.form.input4')}</p>
              <label className="label-file-complaints" >
                <img src="/images/Icons/upload.svg" alt="" />
                <span>{t('complaints.form.placeholder4')}</span>
                <input name="file-complaints" type="file" />
              </label>
            </div>
            <div>
              <p>{t('complaints.form.input5')} *</p>
              <input
                type="text"
                placeholder={t('complaints.form.placeholder5')}
                name="e-mail-complaints"
                required
              />
            </div>
            <button className="btn-blue" type="submit">
            {t('complaints.form.formBtn')}
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComplaintsForm;
