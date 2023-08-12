import React from "react";
import DashboardLayout from "../../Layout";
import { API_URL } from "../../../HHTP/clients";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import MyLink from "../../Common/MyLink";
import { useRouter } from "next/router";

const AddComment = ({ id }) => {
  const { register, handleSubmit, setValue, control, reset } = useForm();
  const { t } = useTranslation();
  const router = useRouter()

  const onSubmit = (values) => {
    console.log(values);
    axios({
      method: "post",
      url: `${API_URL}/forum/comments/`,
      data: {
        forum_id: id,
        fullName: values.name,
        comment: values.comment,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        toast.success("Ваш коментарий успешно добавлен");
        router.push(`/forum/`);
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
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
          <h1>{t('forum.postComment')}</h1>
          <form className="form-theme" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>{t('forum.name')}*</p>
              <input
                placeholder={t('forum.namePlaceholder')}
                type="text"
                required
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <p>{t('forum.email')}*</p>
              <input placeholder={t('forum.emailPlaceholder')} name="email" type="email" required />
            </div>

            <div>
              <p>{t('forum.comment')}*</p>
              <input
                placeholder={t('forum.commentPlaceholder')}
                type="text"
                required
                {...register("comment", { required: true })}
              />
            </div>

            <button className="btn-blue" type="submit">
            {t('forum.send')}
            </button>
          </form>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default AddComment;
