import { Component } from 'react';
import s from './ContactForm.module.css';

 class ContactForm extends Component {

    render() {
        return (
            <form className={s.form}>
              <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required  
              />
              <button type="submit">Add contact</button>
            </form>
          );
    }
  
}

export default ContactForm;