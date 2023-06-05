import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';
import { getContacts, getError, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);

  useEffect(() => {
    if (error) {
      return alert('Oops something went wrong!! Please try again later');
    }
  }, [error]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContact = useMemo(() => {
    const normalizeFilter = filter.toLowerCase();
    const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return visibleContact;
  }, [contacts, filter]);

  return (
    <>
      {visibleContact.length !== 0 ? (
        <ul className={css.contactList}>
          {visibleContact.map(({ name, phone, id }) => {
            return <ContactItem name={name} number={phone} key={id} id={id} />;
          })}
        </ul>
      ) : (
        <p className={css.message}>There is no contact with that name</p>
      )}
    </>
  );
};

export default ContactList;
