import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contacts/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 1, firstName: 'Joe', phone: '123-213-1233'},
      { id: 2, firstName: 'Mike', phone: '132-212-1233'},
      { id: 3, firstName: 'Jill', phone: '112-000-1233'}
    ]
  }

  removeContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if ( contact.id !== id )
        return contact 
    })
    this.setState({ contacts: [ ...contacts ]})
  }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

              // { firstName: 'tom', phone: '12341234'}
  addContact = (incommingContact) => {
                                    // firstName: newContact.firstName, 
      // newContact = { id: 123, firstName: 'tom', phone: '12341234'}
    let newContact = { id: this.getId(), ...incommingContact }
    this.setState({ contacts: [ newContact, ...this.state.contacts ]})
  }

  render() {
    const { contacts } = this.state 
    return (
      <Container>
        <Header>
          React Contact List
        </Header>
        <ContactForm add={this.addContact} />
        <Image 
          src="https://images.unsplash.com/photo-1562101997-7bc9a0279b02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          bordered
          size='tiny'
        />
        <ContactList contacts={contacts}  remove={this.removeContact} />
      </Container>
    )
  }
}

export default App;