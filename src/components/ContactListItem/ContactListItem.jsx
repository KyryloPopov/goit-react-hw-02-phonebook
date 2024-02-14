import React from 'react';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id, handleDeleteContact }) => {
  return (
    <li className={css.contact}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => handleDeleteContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};
