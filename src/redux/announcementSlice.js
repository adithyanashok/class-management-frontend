import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAnnouncement: null,
  isFetching: false,
  error: false,
};

export const announcementSlice = createSlice({
  name: "Announcement",
  initialState,
  reducers: {
    addAnnouncementStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addAnnouncementSuccess: (state, action) => {
      state.isFetching = false;
      state.currentAnnouncement.push(action.payload);
    },
    addAnnouncementFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addAnnouncementStart,
  addAnnouncementSuccess,
  addAnnouncementFailure,
} = announcementSlice.actions;

export default announcementSlice.reducer;
