import React from 'react';

const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const list = ['цене', 'алфавиту'];

const onClickListItem = (i) => {
  setSelected(i);
  setOpen(false);
}

  return (
    <div className="sort"  >
     <h2 className="sort_par" onClick={() => setOpen(!open)}>Сортировка по: <p className="inner__par"> {list[selected]} </p></h2>
      <div className={open ? "sort__popup" : "sort__popup-hidden"} >
        <div className="sort__ul">
          {list.map((item,i) => (
            <p className={selected == i ?  "option sort__active" : "option" } 
            key={i}
            onClick={() => onClickListItem(i)}
            >{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sort;
