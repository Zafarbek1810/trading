import {ToastContainer} from "react-toastify";
import "../Theme/global.css"
import {GlobalStyle, defaultTheme} from "../Theme/GlobalStyle";
import {ThemeProvider} from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from "react";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Head from "next/head";
import Script from "next/script";

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
        react: {useSuspense: true},
    });

function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);

    const {
        i18n: {language},
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
        <>
            <Head>
                <title>Inlisting</title>
                <meta
                    name="viewport"
                    content="user-scalable = no, initial-scale = 1, maximum-scale = 1, minimum-scale = 1, width = device-width, height = device-height, target-densitydpi=device-dpi"
                />
                <link rel="shortcut icon" href="./favicon.ico"/>
                <title>Inlisting</title>
                <link rel="stylesheet" href="/css/style.min.css"/>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5D9MP2QK');`
                    }}
                />
            </Head>

            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle/>
                <Component {...pageProps} />
                {/* {loading && <Loader loading2={loading2}/>} */}
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
            <Script src="/js/main.min.js" defer></Script>
        </>
    )
}

export default MyApp
