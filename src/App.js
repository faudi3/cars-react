import React from 'react';
import Header from './components/Header';
import Card from "./components/Card";
function App() {

  const items = [
    {"name": "ux", "price": "3 286 000", "imgUrl": "./img/ux.png", "id": 1},
    {"name": "rx", "price": "5 348 000", "imgUrl": "./img/rx.png", "id": 2},
    {"name": "ls", "price": "9 682 000", "imgUrl": "./img/ls.png", "id": 3},
    {"name": "lc", "price": "12 113 000", "imgUrl": "./img/lc.png", "id": 4},
    {"name": "es", "price": "4 314 000", "imgUrl": "./img/es.png", "id": 5},
  ]
  return (
    <div className="App">
      <Header />
      <div className="searchList">
        <div className="searchList__item">
          <p>Все</p>
        </div>
        <div className="searchList__item">
          <p>Седаны</p>
        </div>
        <div className="searchList__item">
          <p>Купе</p>
        </div>
        <div className="searchList__item">
          <p>Гибрид</p>
        </div>
      </div>
      <h2 className="content__title">Все модели</h2>
      <div className="content__list">
        {items.map((obj) => (
          <Card title={obj.name}
                key={obj.key}
                price={obj.price}
                imgUrl={obj.imgUrl}
          />
        ))}
      </div>
     
    </div>
  );
}

export default App;
