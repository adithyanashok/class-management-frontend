import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentEvent: null,
  isFetching: false,
  error: false
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEventStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addEventSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addEventFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addEventStart, addEventSuccess, addEventFailure } = eventSlice.actions

export default eventSlice.reducer