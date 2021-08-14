import React, { Component } from 'react';
import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';




class App extends Component {
  state = {
    contacts: [],
    
  }

  
  render() {
    // const {name} = this.state;    

    return (
      <Container>
      <div>
      <h1>Phonebook</h1>
      <ContactForm />
     
      <h2>Contacts</h2>
      {/* <Filter ... />
      <ContactList ... /> */}
    </div>
    </Container>
    );
  }
}

export default App;
