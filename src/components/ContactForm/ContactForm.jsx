import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const idContacts = nanoid();

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    onSubmit(name.value, number.value);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={idContacts}>
        <p>Name</p>
        <input
          value={name}
          id={idContacts}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={idContacts}>
        <p>Number</p>
        <input
          value={number}
          id={idContacts}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;
