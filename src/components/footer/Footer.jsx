import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Воронцов</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              О себе
            </a>
          </li>
          <li>
            {' '}
            <a href="#portfolio" className="footer__link">
              Проекты
            </a>
          </li>
          <li>
            {' '}
            {/* <a href="#testimonials" className="footer__link">
              Testimonials
            </a> */}
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/Siltrim?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link">
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://t.me/Siltrim"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank">
            <i className="uil uil-telegram"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=87024387999"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank">
            <i className="uil uil-whatsapp"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved </span>
      </div>
    </footer>
  );
};

export default Footer;
