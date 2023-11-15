import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Услуги</h2>
      <span className="section__subtitle"></span>

      <div className="services__container container">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              HTML <br /> Верстка
            </h3>
          </div>

          <span className="services__button" onClick={() => setToggleState(true)}>
            Подробнее <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState ? 'services__modal active-modal' : 'services__modal'}>
            <div className="services__modal-content">
              <i
                onClick={() => setToggleState(false)}
                className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title"> Услуги</h3>
              <p className="services__modal-description">
                Я предоставляю услуги по веб-разработке с использованием React, превращая ваши
                дизайн-концепции в функциональные и привлекательные приложения.
              </p>

              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Кроссбраузерная и Адаптивная Верстка</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">SEO-Оптимизированная</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">SPA Приложения на React</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Интеграция с Wordpress</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Работа с API на клиенте</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Fronted <br /> разработка
            </h3>
          </div>

          <span className="services__button" onClick={() => setToggleState(true)}>
            Подробнее <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i
                onClick={() => setToggleState(false)}
                className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title"> Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.Providing quality work to clients and
                companies.
              </p>

              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create ux element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I position your company brand.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-database services__icon"></i>
            <h3 className="services__title">
              Backend <br /> разработка
            </h3>
          </div>

          <span className="services__button" onClick={() => setToggleState(true)}>
            Подробнее <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i
                onClick={() => setToggleState(false)}
                className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.Providing quality work to clients and
                companies.
              </p>

              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create ux element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I position your company brand.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
