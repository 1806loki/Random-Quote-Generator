import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quoteSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
  middleware : [thunk]
});

export default store;
