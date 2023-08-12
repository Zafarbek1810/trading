import React, { useState } from 'react';
import DashboardLayout from '../../Layout';
import MyLink from '../../Common/MyLink';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { API_URL } from '../../../HHTP/clients';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const PublishingThemes = () => {
  const { register, handleSubmit, setValue, control, reset } = useForm();
  const { t } = useTranslation();
  const [avatar, setAvatar] = useState();
  const [img, setImg] = useState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    const body = new FormData();
    body.append("name_ru", data.name_ru);
    body.append("name_en", data.name_en);
    body.append("fullName", data.fullName);
    body.append("short_description_ru", data.short_description_ru);
    body.append("short_description_en", data.short_description_en);
    body.append("full_description_ru", data.full_description_ru);
    body.append("full_description_en", data.full_description_en);
    body.append("file", img);
    body.append("avatar", avatar);

    axios({
      method: "post",
      url: `${API_URL}/forum/`,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        toast.success("Ваш коментарий успешно добавлен");
        router.push("/forum");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setLoading(false);
      })
    reset();
  };


  const handleImg = (e) => {
    console.log(e.target.files[0]);
    const imgFile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", imgFile);
    setImg(imgFile);

    console.log(formData);
  };

  const handleLogo = (e) => {
    const imgFile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", imgFile);
    setAvatar(imgFile);

    console.log(formData);
  };

    return (
        <DashboardLayout>
           <div className="brokers-single">
        <ul id="breadcrumb">
          <span>
            <span>
            <MyLink to="/">{t('header.navbar.home')}</MyLink>|<MyLink to="/forum">{t('forum.title')}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
              {t('forum.form')}
              </span>
            </span>
          </span>
        </ul>

        <div className="new__theme">
          <h1>Форум добавить</h1>
          <form className="form-theme" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Название форума (рус.)*</p>
              <input
                placeholder="Название форума"
                type="text"
                required
                {...register("name_ru", { required: true })}
              />
            </div>
            <div>
              <p>Название форума (англ.)*</p>
              <input
                placeholder="Название форума"
                type="text"
                required
                {...register("name_en", { required: true })}
              />
            </div>
            <div>
              <p>ФИО *</p>
              <input
                placeholder="Полное имя"
                type="text"
                required
                {...register("fullName", { required: true })}
              />
            </div>
            <div>
              <p>Краткое Описание (рус)*</p>
              <textarea
                placeholder="Краткое Описание (рус)"
                type="text"
                required
                {...register("short_description_ru", { required: true })}
              />
            </div>
            <div>
              <p>Краткое Описание (англ.)*</p>
              <textarea
                placeholder="Краткое Описание (англ.)"
                type="text"
                required
                {...register("short_description_en", { required: true })}
              />
            </div>
            <div>
              <p>Полное Описание (рус)*</p>
              <textarea
                placeholder="Полное Описание (рус)"
                type="text"
                required
                {...register("full_description_ru", { required: true })}
              />
            </div>
            <div>
              <p>Полное Описание (англ.)*</p>
              <textarea
                placeholder="Полное Описание (англ.)"
                type="text"
                required
                {...register("full_description_en", { required: true })}
              />
            </div>
            <div>
              <p>{t("complaints.form.input4")}</p>
              <label className="label-file-complaints">
                <img src="/images/Icons/upload.svg" alt="" />
                <span>{t("complaints.form.placeholder4")}</span>
                <input type="file" onChange={handleImg} />
              </label>
            </div>
            <div>
              <p>{t("complaints.form.input6")}</p>
              <label className="label-file-complaints">
                <img src="/images/Icons/upload.svg" alt="" />
                <span>{t("complaints.form.placeholder4")}</span>
                <input type="file" onChange={handleLogo} />
              </label>
            </div>

            <button disabled={loading} className="btn-blue send_button" type="submit">
            {t('forum.send')}
            </button>
          </form>
        </div>

      </div>
        </DashboardLayout>
    );
};



const Styled = styled.div`
  
  .send_button{
    &:disabled{
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

export default PublishingThemes;