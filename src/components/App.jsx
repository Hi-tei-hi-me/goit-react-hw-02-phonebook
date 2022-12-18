import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/ListOfContacts';
import Filter from './Search/Search';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  addContact = newContact => {
    const { contacts } = this.state;
    const id = nanoid();
    const newAddedContact = { ...newContact, id: id };
    for (let contact of contacts) {
      if (newAddedContact.name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${newAddedContact.name} is already in your contacts list`);
        return;
      }
    }
    this.setState(prevState => {
      return {
        contacts: [newAddedContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  applyFilter = filter => this.setState({ filter });

  getFilteredList = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredList = this.getFilteredList();
    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onFormSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.applyFilter} />
        {filteredList.length > 0 && (
          <ContactList listContacts={filteredList} handleCLick={this.deleteContact} />
        )}
      </Box>
    );
  }
}
