import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
// import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  // const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      <span>{name}</span>: <span>{number}</span>
      <button
        className={css.deleteBtn}
        type="button"
        // onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
