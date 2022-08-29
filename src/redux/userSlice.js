import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
        state.isFetching = true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.currentUser = action.payload
      state.error = false
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    logout: (state) => {
        state.currentUser = null;
        state.isFetching = false
        state.error = false
    },
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
export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions

export default userSlice.reducer