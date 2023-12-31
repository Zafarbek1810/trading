import React, {useCallback, useState} from "react";

import MyLink from "../../Common/MyLink";
import {HeaderWrapper} from "./Header.style";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import {Select} from "antd";
import {Option} from "antd/lib/mentions";

const Header = () => {
    const router = useRouter();
    const {t, i18n} = useTranslation();
    const defaultLang = i18n.language;
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    const handleChange = (e) => {
        console.log(e.target.value);
        localStorage.setItem("siteLang", e.target.value);
        i18n.changeLanguage(e.target.value);
    };

    const burgerClick = useCallback(() => {
        const body = document.querySelector("body");
        setIsMobileMenuActive((d) => {
            body.style.overflow = !d ? "hidden" : "unset"
            return !d
        });
    }, []);


    return (
        <HeaderWrapper>
            <div className="header">
                <div className="header-top-wrap">
                    <div className="container">
                        <div className="header-top">
                            <MyLink className="header-top__logo" to="/">
                                <img src="/images/Icons/header-logo.svg" alt="logo"/>
                            </MyLink>
                            <div className="header-top__menu">
                                <ul>
                                    <li className={router.route === "/brokers" ? "active" : ""} >
                                        <MyLink to="/brokers">{t('header.navbar.broker')}</MyLink>
                                    </li>
                                    <li
                                        className={router.route === "/calculator" ? "active" : ""}
                                    >
                                        <MyLink to="/calculator">{t('header.navbar.calculator')}</MyLink>
                                    </li>
                                    <li  className={router.route === "/calendar" ? "active" : ""}>
                                        <MyLink to="/calendar">{t('header.navbar.calendar')}</MyLink>
                                    </li>
                                    <li
                                        className={
                                            router.route === "/complaints" ||
                                            router.route === "/complaints-single" ||
                                            router.route === "/complaints-form"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        <MyLink to="/complaints">{t('header.navbar.complaints')}</MyLink>
                                    </li>
                                </ul>
                                <div className="header-top__btns">
                                    {/* <a className="header-top__btns-search" href="#">
                    <img src="/images/Icons/search.svg" alt="" />
                    {t('header.search')}
                  </a> */}
                                    <div className="header-top__sel-wrap">
                                        <img src="/images/Icons/GlobeStand.svg" alt=""/>
                                        <select
                                            value={defaultLang}
                                            bordered={false}
                                            onChange={handleChange}
                                        >
                                            <option value="ru" className="options">
                                                Русский
                                            </option>
                                            <option value="en" className="options">
                                                English
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="header-top__search">
                                    <input type="text" placeholder="поиск..."/>
                                    <button className="header-top__search-close">
                                        <img src="/images/Icons/close-black.svg" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-mob-wrap">
                    <div className="container">
                        <div className="header-mob">
                            <MyLink className="header-mob__logo" to="/">
                                <img src="/images/Icons/footer-logo-333.svg" alt="logo"/>
                            </MyLink>

                            <div className="box-menu">
                                {/* <MyLink to="/" className="search-bnt">
                  <img src="/images/Icons/search.svg" alt="" />
                </MyLink> */}

                                <div className="select-wrapper me-5">
                                    <select
                                        value={defaultLang}
                                        bordered={false}
                                        onChange={handleChange}
                                    >
                                        <option value="ru" className="options">
                                            Рус
                                        </option>
                                        <option value="en" className="options">
                                            Eng
                                        </option>
                                    </select>
                                </div>

                                <div
                                    className={`header-mob__burger ${isMobileMenuActive ? 'active' : ''}`}
                                    onClick={burgerClick}>
                                    <span></span>
                                </div>
                            </div>

                            <nav className={`header-mob__menu ${isMobileMenuActive ? 'active' : ''}`}>
                                <ul>
                                    <li onClick={burgerClick}>
                                        <MyLink to="/brokers">Брокеры</MyLink>
                                    </li>
                                    <li onClick={burgerClick}>
                                        <MyLink to="/calculator">Мультивалютный калькулятор</MyLink>
                                    </li>
                                    <li onClick={burgerClick}>
                                        <MyLink to="/calendar">Экономический календарь</MyLink>
                                    </li>
                                    <li onClick={burgerClick}>
                                        <MyLink to="/complaints">Жалобы</MyLink>
                                    </li>
                                </ul>

                                <MyLink className="tg-btn" to="/#" onClick={burgerClick}>
                                    <img src="/images/Icons/soc-tg.svg" alt=""/>
                                    Telegram-канал
                                </MyLink>``

                                <ul>
                                    <li onClick={burgerClick}>
                                        <MyLink to="/courses">Обучающие курсы</MyLink>
                                    </li>
                                    <li onClick={burgerClick}>
                                        <MyLink to="/brokers-raiting">Рейтинг броккеров</MyLink>
                                    </li>
                                    <li onClick={burgerClick}>
                                        <MyLink to="/news">Новости</MyLink>
                                    </li>
                                    <li onClick={burgerClick}>
                                        <MyLink to="/partners">Наши партнеры</MyLink>
                                    </li>
                                    <li onClick={burgerClick}>
                                        <MyLink to="/forum">Форум</MyLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
