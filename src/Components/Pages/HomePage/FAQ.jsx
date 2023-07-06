import React from "react";

const FAQ = () => {
  return (
    <>
      <div class="home-faqs">
        <h3>Часто задаваемые вопросы</h3>

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
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
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Трейдинг - это процесс покупки и продажи финансовых
                инструментов, таких как акции, валюты, товары, криптовалюты и
                другие, с целью получения прибыли.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Существуют различные типы трейдинга, такие как дневной трейдинг,
                интрадей-трейдинг, позиционный трейдинг и скейлинг. Каждый тип
                трейдинга имеет свои особенности и принципы работы.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Для начала трейдинга необходимо изучить базовые принципы работы
                на финансовых рынках, выбрать подходящего брокера, открыть
                торговый счет и разработать собственную торговую стратегию.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Трейдеры используют различные инструменты для анализа рынка,
                такие как технический и фундаментальный анализ, графики и
                индикаторы. Также трейдеры могут использовать автоматизированные
                торговые системы и алгоритмы.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home-top__right-reklam-block rekl-gradient mb-0">
        <img src="images/Home-page/333.gif" alt="" />
      </div>
    </>
  );
};

export default FAQ;
