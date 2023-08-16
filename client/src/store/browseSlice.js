import { createSlice } from "@reduxjs/toolkit";

export const browseSlice = createSlice({
  name: 'browse',
  initialState: false,
  reducers: {
    updateBrowse: (state, action) => {
      return action.payload
    }
  },
});

export const { updateBrowse } =
browseSlice.actions;

export default browseSlice.reducer;