import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['Все', 'Седаны', 'Купе','Гибрид']
  
 
  return (
    <div className="searchList"> 
        {
          categories.map((obj, index) => (
            <div 
            key={categories.indexOf(obj)}
            onClick={() => setActiveIndex(index)} 
            className={activeIndex == categories.indexOf(obj) ? "searchList__item active" : "searchList__item"}>
              <p>{obj}</p>
            </div>
          ))
        }
      </div>
  );
}

export default Categories;
