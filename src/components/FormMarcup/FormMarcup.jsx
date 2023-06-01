import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './FormMarcup.module.css';

const FormMarcup = ({ submitContact }) => {
  const inputNameId = nanoid();
  const inputNumberId = nanoid();
  return (
    <form className={css.form} onSubmit={submitContact} autoComplete="off">
      <label htmlFor={inputNameId} className={css.label}>
        Name
      </label>
      <input
        className={css.input}
        type="text"
        name="name"
        id={inputNameId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={inputNumberId} className={css.label}>
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        id={inputNumberId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default FormMarcup;

FormMarcup.propTypes = {
  submitContact: PropTypes.func.isRequired,
};
