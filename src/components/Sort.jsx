import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filter';

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(state => state.filter.sort);
  const [open, setOpen] = React.useState(false);
 
  const list = [
    {name: 'цене', sorting: 'price'},
    {name: 'алфавиту', sorting: 'name'},
  ];


const onClickListItem = (i) => {
  dispatch(setSort(i));
  setOpen(false);
}

  return (
    <div className="sort"  >
     <h2 className="sort_par" onClick={() => setOpen(!open)}>Сортировка по: <p className="inner__par"> {sort.name} </p></h2>
      <div className={open ? "sort__popup" : "sort__popup-hidden"} >
        <div className="sort__ul">
          {list.map((item,i) => (
            <p className={sort.sorting == item.sorting ?  "option sort__active" : "option" } 
            key={i}
            onClick={() => onClickListItem(item)}
            >{item.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sort;
