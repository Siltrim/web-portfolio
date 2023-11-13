import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggle = (i) => setToggleState(i);

  return (
    <section className="section qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggle(1)}
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button  button--flex'
            }>
            <i className="uil uil-graduation-cap qualificatoin__icon"></i> Education
          </div>

          <div
            onClick={() => toggle(2)}
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button  button--flex'
            }>
            {' '}
            <i className="uil uil-briefcase-alt qualificatoin__icon"></i> Experience
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
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">MUIT</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023-Present
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
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">MUIT</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019-2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="qualification__info">
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">MUIT</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017-2018
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
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">MUIT</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023-Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__info">
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">MUIT</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>
            <div className="qualification__data">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;