import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
  
 
  return (
    <div className="header">
      <Link to="/">
      <div className="header__left-side">
        <img width={50} height={50} src="./img/logo.svg" alt="лого" />
        <h2 className="header__title">Cars on react</h2>
      </div>
      </Link>
     <div className="header__right-side">
      <Link to="/cart">
      <div className="header__drawer" >
        <p> 395 rub</p>
        <div className="header__drawer-btn">
         <img width={35} height={35} src="./img/telega.svg" alt="корзина" />
         <p className="header__amount">3</p>
         </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
