import { ToastContainer } from "react-toastify";
import "../Theme/global.css"
import {GlobalStyle, defaultTheme} from "../Theme/GlobalStyle";
import {ThemeProvider} from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Loader from "../src/Components/Common/Loader/";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

if (typeof window === undefined) {
  var window = {};
}

const lang = window?.localStorage?.getItem("siteLang") || "ru";
console.log(lang);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["ru", "en", "uz"],
    lng: lang,
    fallbackLng: "ru",
    detectionL: {
      order: ["htmlTag", "cookie", "localStorage", "subdomain", "path"],
      caches: ["cookie"],
    },
    ns: ["translation"],
    backend: {
      loadPath: "/assets/locales/{{lng}}/{{ns}}.json",
    },
    react: { useSuspense: true },
  });

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);

  const {
    i18n: { language },
    i18n,
  } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("siteLang")) || "ru";
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setLoading2(true);
    }, 1500);
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Component {...pageProps} />
        {loading && <Loader loading2={loading2}/>}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </ThemeProvider>
  )
}

export default MyApp
