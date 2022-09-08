import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    RegisterStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    RegisterSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    RegisterFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  loginStart,
  loginFailure,
  loginSuccess,
  RegisterStart,
  RegisterSuccess,
  RegisterFailure,
  logout
} = userSlice.actions;
export default userSlice.reducer;
