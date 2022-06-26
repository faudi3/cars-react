import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left-side">
        <img width={50} height={50} src="/img/logo.svg" alt="лого" />
        <h2 className="header__title">Cars on react</h2>
      </div>
      <input placeholder="Поиск" className="header__search"/> 
      <div className="header__drawer">
        <p> 395 rub</p>
        <div className="header__drawer-btn">
         <img width={35} height={35} src="./img/telega.svg" alt="корзина" />
         <p className="header__amount">3</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
