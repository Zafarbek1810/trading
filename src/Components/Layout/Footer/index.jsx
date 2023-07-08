import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__top-sec">
          <div className="container">
            <div className="footer__top">
              <div className="footer__top-left">
                <a className="footer__top-left-logo" href="#">
                  <img src="/images/Icons/footer-logo-333.svg" alt="" />
                </a>
              </div>
              <div className="footer__top-right">
                <div className="footer__top-right-contact">
                  <a href="#"> info@gmail.com </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__center-sec">
          <div className="container">
            <div className="footer__center">
              <a className="tg-btn" href="#">
                <img src="/images/Icons/soc-tg.svg" alt="" />
                Telegram-канал
              </a>
              <ul>
                <li>
                  <a href="#"> News flow </a>
                </li>
                <li>
                  <a href="#"> House rules </a>
                </li>
                <li>
                  <a href="#"> Web site & brokker solution </a>
                </li>
                <li>
                  <a href="#"> Web site & brokker solution </a>
                </li>
                <li>
                  <a href="#"> Брокеры </a>
                </li>
                <li>
                  <a href="#"> Advertising </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom-sec">
          <div className="container">
            <div className="footer__bottom">
              <a href="#"> Pricacy & Policy </a>
              <a href="#"> Terms of Use </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="reklam-popup">
        <a className="reklam-popup__area" href="#"></a>
        <div className="reklam-popup__body">
          <button id="popup-btn-close">
            <img src="/images/Icons/close-circle-fill2.svg" alt="" />
          </button>
          <img src="/images/popup-rekl.jpg" alt="" />
        </div>
      </div> */}
    </>
  );
};

export default Footer;
