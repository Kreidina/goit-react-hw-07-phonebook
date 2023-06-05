import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import FormMarcup from 'components/FormMarcup/FormMarcup';
import { addNewContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const submitContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return alert(`Name: ${name} to already in contacts`);

    if (
      contacts.some(
        contact => contact.phone.toLowerCase() === phone.toLowerCase()
      )
    )
      return alert(`Number: ${phone} to already in contacts`);

    dispatch(addNewContact({ name, phone, id: nanoid() }));
    form.reset();
  };

  return <FormMarcup submitContact={submitContact} />;
};

export default ContactForm;
