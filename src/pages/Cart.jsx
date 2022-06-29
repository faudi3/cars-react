import React from 'react';
import { Link} from 'react-router-dom';

const Cart = () => {
  return (
    <div className="wrapper-cart">
      <div className='basket'>
      <h1>Корзина</h1>
      <h2>Очистить корзину</h2>
      </div>
      <div className='basket__items'>
        <div className="basket__item">
          <img width={300} src="/img/es.png" 
          alt="first" className="basket__img"/>
          <div>
            <div className="basket__text">
          <p>Наименование: ES</p>
          <p>цена: rub</p>
          </div>
          <div className="adding">
          <div className="minus">-</div>
          <p>2</p>
          <div className="plus">+</div>
          </div>
          </div>
          <img  className="remove_basket" width={25} height={25} src="/img/remove.svg" alt="remove" />
        </div>
      </div>
      <div className="cart__result">
        <p>Всего: 3</p>
        <p>Сумма: </p>
      </div>
      <Link className="link" to='/'>
         <div className="back">Назад</div>
      </Link>
     
    </div>
  );

}

export default Cart;
