import React, { Component } from 'react';
import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';



class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  nameInputId = uuidv4(); 

  handleChange = e => {
    console.log(e.currentTarget);
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    // const {name} = this.state;    

    return (
      <Container>
      <div>
      <h1>Phonebook</h1>
      <ContactForm
      />
     
      <h2>Contacts</h2>
      {/* <Filter ... />
      <ContactList ... /> */}
    </div>
    </Container>
    );
  }
}

export default App;
