import React from 'react';
import './scrollup.css';

const ScrollUp = () => {
  window.addEventListener('scroll', (e) => {
    const scrollUp = document.querySelector('.scrollup');
    if (e.currentTarget?.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  });

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
