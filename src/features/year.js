import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  years: 1,
};

const yearSlice = createSlice({
  name: "years",
  initialState,
  reducers: {
    initilaYear: (state, action) => {
      state.years = action.payload;
    },
    past: (state) => {
      state.years = 1;
    },
  },
});

export const { initilaYear, past } = yearSlice.actions;
export default yearSlice.reducer;
