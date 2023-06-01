import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';
// import { useMemo } from 'react';

import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // const visibleContact = useMemo(() => {
  //   const normalizeFilter = filter.toLowerCase();
  //   const visibleContact = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  //   return visibleContact;
  // }, [contacts, filter]);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, phone, id }) => {
        return <ContactItem name={name} number={phone} key={id} id={id} />;
      })}
    </ul>
  );
};

export default ContactList;
