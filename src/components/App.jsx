import { ContactForm } from "components/ContactForm/ContactForm.jsx";
import { ContactList } from "components/ContactList/ContactList.jsx";
import { Notification } from "components/Notification/Notification.jsx";
import { Filter } from "components/Filter/Filter.jsx";

import { nanoid } from "nanoid";
import { Container, FormTitle, ContnactsTitle } from "./App.styled";
import { useEffect, useState } from 'react';

const LS_KEY = 'contact_list';

export const App = () => {
  const initialValue = JSON.parse(localStorage.getItem(LS_KEY)) === false ? [] : JSON.parse(localStorage.getItem(LS_KEY));
  const [contacts, setContacts] = useState(initialValue);
  const [filter, setFilter] = useState('');

  const handleSubmit = (data) => {
    const contact = { ...data, id: nanoid() };
    setContacts(prevContacts => [...prevContacts, contact]);
  }

  const removeContact = (contactId) => {
    setContacts( contacts => contacts.filter(({id}) => id !== contactId));
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  }

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
  if (contacts.length !== 0) {
    return contacts.filter(({ inputName }) => inputName && inputName.toLowerCase().includes(normalizedFilter));
  }
  };

  useEffect(() => {
    const contactsFromLocalStorage = JSON.parse(localStorage.getItem(LS_KEY));
    if (contactsFromLocalStorage) {
      setContacts(contactsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  const filteredContacts = getFilteredContacts();
  const contactsLength = contacts.length;

  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm onSubmit={handleSubmit} contacts={contacts} />
      {contactsLength !== 0 && <Filter value={filter} changeFilter={changeFilter} />}
      {contactsLength === 0 && <Notification message={"This is where your added contacts will be displayed"} />}
      {contactsLength !== 0 && <>
                                <ContnactsTitle>Contacts</ContnactsTitle>
                                <ContactList contacts={filteredContacts || []} onRemoveContact={removeContact} />
      </>}
    </Container>
  );
};
