import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/Siltrim?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="home__social-icon">
        <i className="uil uil-github-alt"></i>
      </a>
      <a href="https://t.me/Siltrim" className="home__social-icon" rel="noreferrer" target="_blank">
        <i className="uil uil-telegram"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=87024387999"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer">
        <i className="uil uil-whatsapp"></i>
      </a>
    </div>
  );
};

export default Social;
