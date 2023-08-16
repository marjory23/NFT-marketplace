import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [{
      id: '',
      title: '',
      desc: '',
      imgUrl: '',
      creator: '',
      categories: [''],
      price: 0
    }]
  },
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload.data
    }
  },
});

export const { updateData } =
dataSlice.actions;

export default dataSlice.reducer;