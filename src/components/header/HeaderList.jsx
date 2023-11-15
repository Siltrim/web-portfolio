import React, { useState } from 'react';

const HeaderList = () => {
  const [activeNav, setActiveNav] = useState('');

  const LinkList = [
    { link: '#home', name: 'Главная', icon: 'uil-estate' },
    { link: '#about', name: 'О себе', icon: 'uil-user' },
    { link: '#skills', name: 'Навыки', icon: 'uil-file-alt' },
    { link: '#services', name: 'Услуги', icon: 'uil-briefcase-alt' },
    { link: '#qualification', name: 'Квалификация', icon: 'uil-university' },
    { link: '#portfolio', name: 'Проекты', icon: 'uil-scenery' },
    { link: '#contact', name: 'Контакты', icon: 'uil-message' },
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
