import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = formData => {
    const hasDuplicates = this.state.contacts.some(
      contact => contact.name === formData.name
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts!`);
      return;
    }
    const finalContact = {
      ...formData,
      id: nanoid(),
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, finalContact],
      };
    });
  };

  handleDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  handleChangeFilter = event => {
    const value = event.target.value;
    this.setState({ filter: value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
