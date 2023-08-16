import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import browseReducer from './browseSlice'



const store = configureStore({
  reducer: {
    data : dataReducer,
    browse : browseReducer

  },
});

export default store;