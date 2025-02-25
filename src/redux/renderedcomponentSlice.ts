import { createSlice } from "@reduxjs/toolkit";
import { components } from "../constants";

const renderedComponentSlice = createSlice({
  name: "renderedComponent", // Updated name
  initialState: {
    name: components.auth.login, // Updated key
  },
  reducers: {
    setRenderedComponent: (state, action) => {
      state.name = action.payload; // Updated key
    },
  },
  extraReducers: (builder) => {},
});

export const { setRenderedComponent } = renderedComponentSlice.actions;

export default renderedComponentSlice.reducer;
