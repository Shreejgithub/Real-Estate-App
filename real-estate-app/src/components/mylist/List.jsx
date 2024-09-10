import React from 'react';
import { useMyList } from './MyListContext';
import { list } from '../data/Data';

function List() {
  const { addToMyList } = useMyList();

  const handleAddToMyList = (item) => {
    addToMyList(item);
  };
  
  return (
    <div className="list">
      {list.map((item) => (
        <div key={item.id} className="card">
          <img src={item.cover} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.location}</p>
          <button onClick={() => handleAddToMyList(item)}>
            <i className="fa-solid fa-heart"></i> Add to My List
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
