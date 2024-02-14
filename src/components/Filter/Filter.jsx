import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ filterValue, handleChangeFilter }) => {
  return (
    <div className={css.filter}>
      <h3>Find contacts by name</h3>
      <input
        onChange={handleChangeFilter}
        type="text"
        name="keyword"
        value={filterValue}
      />
    </div>
  );
};
