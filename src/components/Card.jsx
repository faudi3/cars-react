import React from 'react';

const Card = ({name,price, imgUrl}) => {
  return (
    <div className="card">
      <h3 className="card__title">{name}</h3>
      <img width={300} className="card__image" src={imgUrl} />
      <div className="card__wrapper">
        <p className="card__price">Цена от {price} руб</p>
        <div className="add-btn">Добавить +</div>
      </div>
    </div>
  );
}

export default Card;
