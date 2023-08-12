import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../Layout";
import MyLink from "../../../Common/MyLink";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../../../../HHTP/clients";
import { useRouter } from "next/router";
import StyledWrapper from "./style";

const ComplaintsForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, control, reset, setValue } = useForm();
  const [avatar, setAvatar] = useState();
  const [img, setImg] = useState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const body = new FormData();
    body.append("brokerName", data.brokerName);
    body.append("reporterName", data.exchangeName);
    body.append("url", data.link);
    body.append("logo", avatar);
    body.append("avatar", img);
    body.append("situation_description", data.textarea);

    const res = await axios({
      method: "post",
      url: `${API_URL}/reports/`,
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      data: body,
    })
      .then((res) => {
        console.log(res.data);
        router.push("/complaints");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/reports/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const handleSkrinshotBtn = () => {

  };

  return (
    <DashboardLayout>
      <StyledWrapper className="brokers-single">
        <ul id="breadcrumb">
          <span>
            <span>
              <MyLink to="/">{t("header.navbar.home")}</MyLink>|
              <span className="breadcrumb_last" aria-current="page">
                {t("complaints.title")}
              </span>
            </span>
          </span>
        </ul>

        <div className="complaints">
          <h1>{t("complaints.btn")}</h1>
          {/* <h2>{t("complaints.form.title")}</h2> */}

          <form
            className="complaints__form"
            onSubmit={handleSubmit(onSubmit)}
            // enctype="multipart/form-data"
          >
            <div>
              <p>{t("complaints.form.input3")}*</p>
              <input
                type="text"
                placeholder={t("complaints.form.placeholder1")}
                {...register("exchangeName", { required: true })}
              />
            </div>
            <div>
              <p>{t("complaints.form.input2")} *</p>
              <input
                type="text"
                {...register("link", { required: true })}
                placeholder={t("complaints.form.placeholder2")}
              />
            </div>
            <div>
              <textarea
                placeholder={t("complaints.form.textarea")}
                {...register("textarea", { required: true })}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div>
              <p>{t("complaints.form.input1")} *</p>
              <input
                type="text"
                placeholder={t("complaints.form.placeholder1")}
                {...register("brokerName", { required: true })}
              />
            </div>
            <div>
              <p>{t("complaints.form.input5")} *</p>
              <input
                type="text"
                placeholder={t("complaints.form.placeholder5")}
                {...register("e-mail-complaints", { required: true })}
              />
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
              <p>{t("complaints.form.input4")}</p>
              <label className="label-file-complaints">
                <img src="/images/Icons/upload.svg" alt="" />
                <span>{t("complaints.form.placeholder4")}</span>
                <input type="file" onChange={handleImg} />
              </label>
            </div>
            <div>
              <button
                className="btn-blue mt-5"
                onClick={handleSkrinshotBtn}
                type="button"
              >
                +Скриншот
              </button>
            </div>
            <button disabled={loading} className="btn-blue mt-5" type="submit">
              {t("complaints.form.formBtn")}
            </button>
          </form>
        </div>
      </StyledWrapper>
    </DashboardLayout>
  );
};

export default ComplaintsForm;
