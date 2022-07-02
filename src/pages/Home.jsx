import React from 'react';

import Card from "../components/Card";
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';

const Home = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [items,setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'алфавиту',
    sorting: 'name',
  });

  console.log(categoryId,sortType)

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://62ba16ceff109cd1dca0af87.mockapi.io/items?${ 
      categoryId > 0 ? `category=${categoryId}` : ''
    }&sortBy=${sortType.sorting}&order=asc`
    )
    .then((res) => {
    return res.json();
    })
    .then((json) => {
      setTimeout(() => {
        setItems(json);
        setIsLoading(false);
      }, 1000);
     });
     window.scrollTo(0,0);
    }, [categoryId,sortType]);

    const onChangeInput = (event) => {
      setSearchValue(event.target.value);
    }

  return (
    <div>
       <div className="categAndSort">
       <Categories value={categoryId} 
                   onClickCategory={(id) => setCategoryId(id)}
       />
        {/* <div className="header__switch">
          <div  id="header__switch-circle"></div>
         </div> */}
        <Sort value={sortType} 
              onChangeSort={(id) => setSortType(id)} />
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
