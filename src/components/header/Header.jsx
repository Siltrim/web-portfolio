import React, { useState } from 'react';

import './header.css';
import HeaderList from './HeaderList';
import headerImg from '../../assets/logo.png';

const Header = () => {
  window.addEventListener('scroll', (e) => {
    const header = document.querySelector('.header');
    if (e.currentTarget?.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container ">
        <div className="wrapper-img">
          <img src={headerImg} alt="Logo" />
        </div>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            <HeaderList />
          </ul>

          <i className="uil uil-times nav__close" onClick={() => setShowMenu(!showMenu)}></i>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
