import React from 'react';
import Header from './components/Header';
import Card from "./components/Card";
import Categories from './components/Categories';
function App() {
  const [searchValue, setSearchValue] = React.useState('');
 
  const items = [
    {"name": "ux", "price": "3 286 000", "imgUrl": "./img/ux.png", "id": 1, "category" : 3},
    {"name": "rx", "price": "5 348 000", "imgUrl": "./img/rx.png", "id": 2, "category" : 3},
    {"name": "ls", "price": "9 682 000", "imgUrl": "./img/ls.png", "id": 3, "category" : 1},
    {"name": "lc", "price": "12 113 000", "imgUrl": "./img/lc.png","id": 4, "category" : 2},
    {"name": "es", "price": "4 314 000", "imgUrl": "./img/es.png", "id": 5, "category" : 1},
  ]

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="App">
      <Header  />
      <Categories />
      {/* <div className="header__switch">
          <div  id="header__switch-circle"></div>
         </div> */}
      <h2 className="content__title">Все модели</h2>
      <input onChange={onChangeInput} placeholder="Поиск" className="search" value={searchValue} type="text"/> 
      <div className="content__list">
        {items.filter((obj) => obj.name.includes(searchValue)).map((obj) => (
          <Card title={obj.name}
                key={obj.id}
                price={obj.price}
                imgUrl={obj.imgUrl}
          />
        ))}
      </div>
     
    </div>
  );
}

export default App;
