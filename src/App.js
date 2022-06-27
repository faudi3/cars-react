import React from 'react';
import Header from './components/Header';
import Card from "./components/Card";
import Categories from './components/Categories';
import Sort from './components/Sort';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [items,setItems] = React.useState([]);


  React.useEffect(() => {
    fetch('https://62ba16ceff109cd1dca0af87.mockapi.io/items').then(res => {
    return res.json();
    })
    .then((json) => {
      setItems(json);
     });
    }, []);

  

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="App">
      <Header  />
      <div className="categAndSort">
       <Categories />
        {/* <div className="header__switch">
          <div  id="header__switch-circle"></div>
         </div> */}
        <Sort />
      </div>
      <h2 className="content__title">Все модели</h2>
      <input onChange={onChangeInput} placeholder="Поиск" className="search" value={searchValue} type="text"/> 
      <div className="content__list">
        {items.filter((obj) => obj.name.includes(searchValue)).map((obj) => (
          <Card {...obj} key={obj.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
