import { useDispatch } from 'react-redux';

import FormMarcup from 'components/FormMarcup/FormMarcup';
// import { useEffect } from 'react';
import { addNewContact } from 'redux/operations';
// import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
//
const ContactForm = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  // console.log(contacts);

  const submitContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const newContact = {
      id: nanoid(),
      name,
      phone,
    };
    console.log(newContact);
    //   if (
    //     contacts.some(
    //       contact => contact.name.toLowerCase() === name.toLowerCase()
    //     )
    //   )
    //     return alert(`Name: ${name} to already in contacts`);

    //   if (
    //     contacts.some(
    //       contact => contact.number.toLowerCase() === number.toLowerCase()
    //     )
    //   )
    //     return alert(`Number: ${number} to already in contacts`);

    dispatch(addNewContact(newContact));
    form.reset();
  };

  return <FormMarcup submitContact={submitContact} />;
};

export default ContactForm;
