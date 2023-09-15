import React, { useState } from "react";
import DashboardLayout from "../../Layout";
import MyLink from "../../Common/MyLink";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../../../HHTP/clients";
import { useRouter } from "next/router";
import styled from "styled-components";
import { toast } from "react-toastify";

const PublishingThemes = () => {
  const { register, handleSubmit, setValue, control, reset } = useForm();
  const { t } = useTranslation();
  const [avatar, setAvatar] = useState();
  const [img, setImg] = useState();
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
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
    body.append("file1", img1);
    body.append("file2", img2);
    body.append("file3", img3);
    body.append("file4", img4);
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
        toast.success("Ваш Форум успешно добавлен");
        router.push("/forum");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    reset();
  };

  const handleLogo = (e) => {
    const imgFile = e.target.files[0];
    const charCode = imgFile.name.charCodeAt(0)
    if (charCode >= 0x0400 && charCode <= 0x04FF) {
      toast.error('Файл не должен содержать кириллицу')
    } else {
      setAvatar(imgFile);
    }
  };

  const handleImg = (e) => {
    const imgFile = e.target.files[0];
    const charCode = imgFile.name.charCodeAt(0)
    if (charCode >= 0x0400 && charCode <= 0x04FF) {
      toast.error('Файл не должен содержать кириллицу')
    } else {
      setImg(imgFile);
    }
  };

  const handleScreenshoot1 = (e) => {
    const imgFile = e.target.files[0];
    const charCode = imgFile.name.charCodeAt(0)
    if (charCode >= 0x0400 && charCode <= 0x04FF) {
      toast.error('Файл не должен содержать кириллицу')
    } else {
      setImg1(imgFile);
    }
  };
  const handleScreenshoot2 = (e) => {
    const imgFile = e.target.files[0];
    const charCode = imgFile.name.charCodeAt(0)
    if (charCode >= 0x0400 && charCode <= 0x04FF) {
      toast.error('Файл не должен содержать кириллицу')
    } else {
      setImg2(imgFile);
    }
  };
  const handleScreenshoot3 = (e) => {
    const imgFile = e.target.files[0];
    const charCode = imgFile.name.charCodeAt(0)
    if (charCode >= 0x0400 && charCode <= 0x04FF) {
      toast.error('Файл не должен содержать кириллицу')
    } else {
      setImg3(imgFile);
    }
  };
  const handleScreenshoot4 = (e) => {
    const imgFile = e.target.files[0];
    const charCode = imgFile.name.charCodeAt(0)
    if (charCode >= 0x0400 && charCode <= 0x04FF) {
      toast.error('Файл не должен содержать кириллицу')
    } else {
      setImg4(imgFile);
    }
  };

  return (
    <DashboardLayout>
      <Styled className="brokers-single">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t("header.navbar.home")}</MyLink>|
              <MyLink to="/forum">{t("forum.title")}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t("forum.form")}
              </span>
            </span>
          </span>
        </ul>

        <div className="new__theme">
          <h1>{t("forum.add")}</h1>
          <form className="form-theme" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>{t('forum.title-name')} (рус.)*</p>
              <input
                placeholder={t('forum.title-name')}
                type="text"
                required
                {...register("name_ru", { required: true })}
              />
            </div>
            <div>
              <p>{t('forum.title-name')} (англ.)*</p>
              <input
                placeholder={t('forum.title-name')}
                type="text"
                required
                {...register("name_en", { required: true })}
              />
            </div>
            <div>
              <p>{t('forum.name')} *</p>
              <input
                placeholder={t('forum.name')}
                type="text"
                required
                {...register("fullName", { required: true })}
              />
            </div>
            <div>
              <p>{t('forum.shortPlaceholder')} (рус)*</p>
              <textarea
                placeholder={t('forum.shortPlaceholder')}
                type="text"
                required
                {...register("short_description_ru", { required: true })}
              />
            </div>
            <div>
              <p>{t('forum.shortPlaceholder')} (англ.)*</p>
              <textarea
                placeholder={t('forum.shortPlaceholder')}
                type="text"
                required
                {...register("short_description_en", { required: true })}
              />
            </div>
            <div>
              <p>{t('forum.fullPlaceholder')} (рус)*</p>
              <textarea
                placeholder={t('forum.fullPlaceholder')}
                type="text"
                required
                {...register("full_description_ru", { required: true })}
              />
            </div>
            <div>
              <p>{t('forum.fullPlaceholder')} (англ.)*</p>
              <textarea
                placeholder={t('forum.fullPlaceholder')}
                type="text"
                required
                {...register("full_description_en", { required: true })}
              />
            </div>
            <div style={{width:"100%"}}><p>{t("complaints.img-info")}</p></div>
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
            <div>
              <p>{t("complaints.form.screenshoot")}</p>
              <label className="label-file-complaints">
                <img src="/images/Icons/upload.svg" alt="" />
                <span>{t("complaints.form.placeholder4")}</span>
                <input type="file" onChange={handleScreenshoot1} />
              </label>
              <label className="label-file-complaints">
                <img src="/images/Icons/upload.svg" alt="" />
                <span>{t("complaints.form.placeholder4")}</span>
                <input type="file" onChange={handleScreenshoot2} />
              </label>
              <label className="label-file-complaints">
                <img src="/images/Icons/upload.svg" alt="" />
                <span>{t("complaints.form.placeholder4")}</span>
                <input type="file" onChange={handleScreenshoot3} />
              </label>
              <label className="label-file-complaints">
                <img src="/images/Icons/upload.svg" alt="" />
                <span>{t("complaints.form.placeholder4")}</span>
                <input type="file" onChange={handleScreenshoot4} />
              </label>
            </div>

            <button
              disabled={loading}
              className="btn-blue send_button"
              type="submit"
            >
              {t("forum.send")}
            </button>
          </form>
        </div>
      </Styled>
    </DashboardLayout>
  );
};

const Styled = styled.div`
  .send_button {
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export default PublishingThemes;
