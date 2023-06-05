import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addNewContact, deleteContacts, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

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
  const index = state.items.findIndex(item => item.id === payload.id);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handelFulfilledFetch)
      .addCase(addNewContact.fulfilled, handelFulfilledAdd)
      .addCase(deleteContacts.fulfilled, handelFulfilledDelete)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addNewContact.pending,
          deleteContacts.pending
        ),
        handelPending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addNewContact.rejected,
          deleteContacts.rejected
        ),
        handelRejected
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addNewContact.fulfilled,
          deleteContacts.fulfilled
        ),
        handelFulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;

// {
//   [fetchContacts.pending]: handelPending,
//   [addNewContact.pending]: handelPending,
//   [deleteContacts.pending]: handelPending,
//   [fetchContacts.rejected]: handelRejected,
//   [addNewContact.rejected]: handelRejected,
//   [addNewContact.rejected]: handelRejected,

//   [fetchContacts.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.items = payload;
//     state.error = '';
//   },

//   [addNewContact.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.items = [...state.items, payload];
//     state.error = '';
//   },

//   [deleteContacts.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.error = '';
//     const index = state.items.findIndex(item => item.id === payload.id);
//     state.items.splice(index, 1);
//   },
// },
