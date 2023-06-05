import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    if (error) {
      return alert('Oops something went wrong!! Please try again later');
    }
  }, [error]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {visibleContacts.length !== 0 ? (
        <ul className={css.contactList}>
          {visibleContacts.map(({ name, phone, id }) => {
            return <ContactItem name={name} number={phone} key={id} id={id} />;
          })}
        </ul>
      ) : (
        !isLoading && (
          <p className={css.message}>There is no contact with that name</p>
        )
      )}
    </>
  );
};

export default ContactList;
