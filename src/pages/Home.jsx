import React from 'react';
import {useNavigate} from 'react-router-dom';
//components
import Card from "../components/Card";
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';
//redux
import { useSelector , useDispatch} from 'react-redux';
import { setCategoryId } from '../redux/slices/filter';
//axios 
import axios from "axios";


const Home = () => {

  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sorting);
  const inputRef = React.useRef();
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  }



  const [searchValue, setSearchValue] = React.useState('');
  const [items,setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
 

  // const [sortType, setSortType] = React.useState({
  //   name: 'алфавиту',
  //   sorting: 'name',
  // });

 
  // React.useEffect(() => {
  //   setIsLoading(true);
  //   fetch(`https://62ba16ceff109cd1dca0af87.mockapi.io/items?${ 
  //     categoryId > 0 ? `category=${categoryId}` : ''
  //   }&sortBy=${sortType}&order=asc`
  //   )
  //   .then((res) => {
  //   return res.json();
  //   })
  //   .then((json) => {
  //     setTimeout(() => {
  //       setItems(json);
  //       setIsLoading(false);
  //     }, 1000);
  //    });
  //    window.scrollTo(0,0);
  //   }, [categoryId,sortType]);
  React.useEffect(() => {
    setIsLoading(true);
    axios.get(`https://62ba16ceff109cd1dca0af87.mockapi.io/items?${ 
        categoryId > 0 ? `category=${categoryId}` : ''  }&sortBy=${sortType}&order=asc`)
        .then((res) => {
          setItems(res.data);
          setIsLoading(false);
        });
  }, [categoryId,sortType]);
 
  



    const onChangeInput = (event) => {
      setSearchValue(event.target.value);
    }

  return (
    <div>
       <div className="categAndSort">
       <Categories value={categoryId} 
                   onClickCategory={onChangeCategory}
       />
        {/* <div className="header__switch">
          <div  id="header__switch-circle"></div>
         </div> */}
        <Sort 
        // value={sortType} onChangeSort={(id) => setSortType(id)} 
        />
      </div>
      <h2 className="content__title">Все модели</h2>
      <div className="search__cont">
      <input 
        onChange={onChangeInput} 
        placeholder="Поиск" 
        className="search" 
        value={searchValue} 
        type="text"
        ref={inputRef}
        /> 
        {
        searchValue &&
        <img className="search__close" src="./img/close.svg" 
        width={20} 
        height={20}
        onClick={onClickClear}
         /> 
         }
        </div>
      <div className="content__list">
        {
          isLoading ? [...new Array(5)].map((_, index) => <Skeleton key={index} />)
          : items.filter((obj) =>obj.name.includes(searchValue) || obj.name.toLocaleUpperCase().includes(searchValue)).map((obj) => <Card key={obj.id} {...obj} />)
          // привод к нижнему регистру и имени и includes, если элеметы могут быть и с большой буквы и с мал
        }
      </div>
    </div>
  );
}

export default Home;
