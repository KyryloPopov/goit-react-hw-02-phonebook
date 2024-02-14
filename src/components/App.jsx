import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(stringifiedContacts) ?? [];
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const stringifiendContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiendContacts);
    }
  }

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
