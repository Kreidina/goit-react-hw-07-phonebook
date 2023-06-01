import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
// import { getContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  // console.log(contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="generalContainet">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
