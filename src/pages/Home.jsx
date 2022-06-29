import React from 'react';

import Card from "../components/Card";
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';

const Home = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [items,setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://62ba16ceff109cd1dca0af87.mockapi.io/items').then(res => {
    return res.json();
    })
    .then((json) => {
      setTimeout(() => {
        setItems(json);
        setIsLoading(false);
      }, 1000);
     });
     window.scrollTo(0,0);
    }, []);

    const onChangeInput = (event) => {
      setSearchValue(event.target.value);
    }

  return (
    <div>
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
        {
          isLoading ? [...new Array(5)].map((_, index) => <Skeleton key={index} />)
          : items.filter((obj) =>obj.name.includes(searchValue)).map((obj) => <Card key={obj.id} {...obj} />)
        }
      </div>
    </div>
  );
}

export default Home;
