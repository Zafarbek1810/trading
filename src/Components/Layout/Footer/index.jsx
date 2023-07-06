import React from "react";

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="footer__top-sec">
          <div class="container">
            <div class="footer__top">
              <div class="footer__top-left">
                <a class="footer__top-left-logo" href="#">
                  <img src="images/Icons/footer-logo-333.svg" alt="" />
                </a>
              </div>
              <div class="footer__top-right">
                <div class="footer__top-right-contact">
                  <a href="#"> info@gmail.com </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__center-sec">
          <div class="container">
            <div class="footer__center">
              <a class="tg-btn" href="#">
                <img src="images/Icons/soc-tg.svg" alt="" />
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

        <div class="footer__bottom-sec">
          <div class="container">
            <div class="footer__bottom">
              <a href="#"> Pricacy & Policy </a>
              <a href="#"> Terms of Use </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="reklam-popup">
        <a class="reklam-popup__area" href="#"></a>
        <div class="reklam-popup__body">
          <button id="popup-btn-close">
            <img src="images/Icons/close-circle-fill2.svg" alt="" />
          </button>
          <img src="images/popup-rekl.jpg" alt="" />
        </div>
      </div> */}
    </>
  );
};

export default Footer;
