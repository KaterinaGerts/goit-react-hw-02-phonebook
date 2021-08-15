import React, { Component } from 'react';
import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';




class App extends Component {
  state = {
    contacts: [],    
  }

  formSubmitHandler = data => {
    console.log(data);
  }
  
  render() {
    
    return (
      <Container>
      <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.formSubmitHandler}/>
     
      <h2>Contacts</h2>
      {/* <Filter ... />
      <ContactList ... /> */}
    </div>
    </Container>
    );
  }
}

export default App;
