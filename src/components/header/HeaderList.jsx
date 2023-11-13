import React, { useState } from 'react';

const HeaderList = () => {
  const [activeNav, setActiveNav] = useState('');

  const LinkList = [
    { link: '#home', name: 'Home', icon: 'uil-estate' },
    { link: '#about', name: 'About', icon: 'uil-user' },
    { link: '#skills', name: 'Skills', icon: 'uil-file-alt' },
    { link: '#services', name: 'Services', icon: 'uil-briefcase-alt' },
    { link: '#portfolio', name: 'Portfolio', icon: 'uil-scenery' },
    { link: '#contact', name: 'Contact', icon: 'uil-message' },
  ];

  return (
    <>
      {LinkList.map((item, i) => (
        <li className="nav__item" key={i}>
          <a
            href={`${item.link}`}
            onClick={() => setActiveNav(`${item.link}`)}
            className={`${activeNav === item.link ? 'nav__link active-link' : 'nav__link'}`}>
            {item.name}
            <i className={`nav__icon uil ${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default HeaderList;
