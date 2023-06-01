import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { addNewContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addNewContact.pending](state) {
      state.isLoading = true;
    },
    [addNewContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addNewContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    //     const tasksSlice = createSlice({
    //   extraReducers: {
    //     // Код решти редюсерів
    //     [ addNewContact.pending](state) {
    //       state.isLoading = true;
    //     },
    //     [addNewContact.fulfilled](state, action) {
    //       state.isLoading = false;
    //       state.error = null;
    //       state.contacts.push(action.payload);
    //     },
    //     [addNewContact.rejected](state, action) {
    //       state.isLoading = false;
    //       state.error = action.payload;
    //     },
    //   },
    // });
    // addNewContact: {
    //   reducer(state, action) {
    //     return { ...state, contacts: [action.payload, ...state.contacts] };
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    // deleteContact: (state, action) => {
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(
    //       contact => contact.id !== action.payload
    //     ),
    //   };
    // },
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const contactsReducer = contactsSlice.reducer;
// export const { addNewContact, deleteContact } = contactsSlice.actions;
