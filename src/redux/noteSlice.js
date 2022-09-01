import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNote: null,
  isFetching: false,
  error: false,
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNoteStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addNoteSuccess: (state, action) => {
      state.isFetching = false;
      state.currentNote = action.payload;
    },
    addNoteFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNoteStart,
  addNoteSuccess,
  addNoteFailure,
} = noteSlice.actions;

export default noteSlice.reducer;
