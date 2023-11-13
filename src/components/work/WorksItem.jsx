import React from 'react';

const WorksItem = ({ item }) => {
  return (
    <div className="work__card">
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work___title">{item.title}</h3>
      <a href="#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItem;
