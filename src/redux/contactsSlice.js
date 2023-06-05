import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addNewContact, deleteContacts, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

const arrayThunks = [fetchContacts, addNewContact, deleteContacts];
const fun = type => arrayThunks.map(thunk => thunk[type]);

const handelPending = state => {
  state.isLoading = true;
};

const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handelFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
const handelFulfilledFetch = (state, { payload }) => {
  state.items = payload;
};

const handelFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};

const handelFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handelFulfilledFetch)
      .addCase(addNewContact.fulfilled, handelFulfilledAdd)
      .addCase(deleteContacts.fulfilled, handelFulfilledDelete)
      .addMatcher(isAnyOf(...fun('pending')), handelPending)
      .addMatcher(isAnyOf(...fun('rejected')), handelRejected)
      .addMatcher(isAnyOf(...fun('fulfilled')), handelFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
