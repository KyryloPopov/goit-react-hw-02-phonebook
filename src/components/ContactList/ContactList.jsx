import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';
export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <ContactListItem
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
            handleDeleteContact={handleDeleteContact}
          />
        );
      })}
    </ul>
  );
};
