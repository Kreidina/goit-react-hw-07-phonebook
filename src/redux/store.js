import { configureStore } from '@reduxjs/toolkit';
import { filterValue } from './filterSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterValue,
  },
});
