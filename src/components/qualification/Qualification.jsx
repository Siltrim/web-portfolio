import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggle = (i) => setToggleState(i);

  return (
    <section id="qualification" className="section qualification">
      <h2 className="section__title">Квалификация</h2>
      <span className="section__subtitle">Мой путь</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggle(1)}
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button  button--flex'
            }>
            <i className="uil uil-graduation-cap qualificatoin__icon"></i> Образование
          </div>

          <div
            onClick={() => toggle(2)}
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button  button--flex'
            }>
            {' '}
            <i className="uil uil-briefcase-alt qualificatoin__icon"></i> Опыт
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }>
            <div className="qualification__data">
              <div className="qualification__info">
                <h3 className="qualification__title">
                  Магистр по специальности информационные технологии, вычислительная техника и
                  программное обеспечение
                </h3>
                <span className="qualification__subtitle">МУИТ</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021-2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__info">
                <h3 className="qualification__title">Пройденные курсы по разработке на React </h3>
                <span className="qualification__subtitle">Ulbi</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="qualification__info">
                <h3 className="qualification__title">
                  Бакалав по специальности коммуникации и коммуникационные технологии
                </h3>
                <span className="qualification__subtitle">АУЭС</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__info">
                <h3 className="qualification__title">Разработка сайтов</h3>

                <span className="qualification__subtitle">Фриланс</span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__info">
                <h3 className="qualification__title">Системный администратор</h3>
                <span className="qualification__subtitle">Bservice</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>
            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__info">
                <h3 className="qualification__title">UI Designer</h3>
                <span className="qualification__subtitle">MUIT</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023-Present
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
