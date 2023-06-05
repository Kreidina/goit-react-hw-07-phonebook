import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <div className="generalContainet">
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
