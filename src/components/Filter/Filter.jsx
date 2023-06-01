// import { filterChange } from 'redux/filterSlice';
import css from './Filter.module.css';
// import { useDispatch } from 'react-redux';

const Filter = () => {
  // const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        // onChange={e => dispatch(filterChange(e.target.value))}
      />
    </label>
  );
};
export default Filter;
