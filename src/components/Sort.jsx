import React from 'react';

const Sort = ({ value, onChangeSort}) => {
  const [open, setOpen] = React.useState(false);
 
  const list = [
    {name: 'цене', sorting: 'price'},
    {name: 'алфавиту', sorting: 'name'},
  ];


const onClickListItem = (i) => {
  onChangeSort(i);
  setOpen(false);
}

  return (
    <div className="sort"  >
     <h2 className="sort_par" onClick={() => setOpen(!open)}>Сортировка по: <p className="inner__par"> {value.name} </p></h2>
      <div className={open ? "sort__popup" : "sort__popup-hidden"} >
        <div className="sort__ul">
          {list.map((item,i) => (
            <p className={value.sorting == item.sorting ?  "option sort__active" : "option" } 
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
