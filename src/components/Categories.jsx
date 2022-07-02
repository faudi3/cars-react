import React from 'react';

const Categories = ({ value, onClickCategory}) => {
  

  const categories = ['Все', 'Седаны', 'Купе','Гибрид']
  
 
  return (
    <div className="searchList"> 
        {
          categories.map((obj, index) => (
            <div 
            key={categories.indexOf(obj)}
            onClick={() => onClickCategory(index)} 
            className={value == categories.indexOf(obj) ? "searchList__item active" : "searchList__item"}>
              <p>{obj}</p>
            </div>
          ))
        }
      </div>
  );
}

export default Categories;
