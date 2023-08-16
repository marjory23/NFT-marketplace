import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import browseReducer from './browseSlice';
import cartReducer from './cartSlice'



const store = configureStore({
  reducer: {
    data : dataReducer,
    browse : browseReducer,
    cart : cartReducer
  },
});

export default store;