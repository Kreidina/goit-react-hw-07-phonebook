import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange: (_, {payload}) => {
      return payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;
export const filterValue = filterSlice.reducer;
