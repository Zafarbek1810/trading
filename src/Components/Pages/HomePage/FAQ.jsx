import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="home-faqs">
        <h3>Часто задаваемые вопросы</h3>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Что такое трейдинг?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Трейдинг - это процесс покупки и продажи финансовых
                инструментов, таких как акции, валюты, товары, криптовалюты и
                другие, с целью получения прибыли.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Какие типы трейдинга существуют?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Существуют различные типы трейдинга, такие как дневной трейдинг,
                интрадей-трейдинг, позиционный трейдинг и скейлинг. Каждый тип
                трейдинга имеет свои особенности и принципы работы.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Как начать трейдинг?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Для начала трейдинга необходимо изучить базовые принципы работы
                на финансовых рынках, выбрать подходящего брокера, открыть
                торговый счет и разработать собственную торговую стратегию.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Какие основные инструменты используют трейдеры?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Трейдеры используют различные инструменты для анализа рынка,
                такие как технический и фундаментальный анализ, графики и
                индикаторы. Также трейдеры могут использовать автоматизированные
                торговые системы и алгоритмы.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-top__right-reklam-block rekl-gradient mb-0">
        <img src="/images/Home-page/333.gif" alt="" />
      </div>
    </>
  );
};

export default FAQ;
