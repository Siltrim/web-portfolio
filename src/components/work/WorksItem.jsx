import React from 'react';

const WorksItem = ({ item }) => {
  return (
    <a href={item.link} target="_blank" rel="noreferrer" className="work__card">
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work___title">{item.title}</h3>
      <span className="work__button">
        Перейти <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </span>
    </a>
  );
};

export default WorksItem;
