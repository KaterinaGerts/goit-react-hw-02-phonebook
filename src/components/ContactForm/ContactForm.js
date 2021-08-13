import { Component } from 'react';
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInputId = uuidv4();

  handleChange = e => {
    console.log(e);
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;

    return (
      <form className={s.form}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onCange={this.handleChange}
          id={this.nameInputId}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
