import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    tag: "",
    quote: "",
    bookmark: [],
  },

  reducers: {
    setTag: (state, action) => {
      console.log("tag action", action.payload);
      state.tag = action.payload;
    },
    setQuote: (state, action) => {
      console.log("tag quote", action.payload);

      state.quote = action.payload;
    },
    addBookmark: (state, action) => {
      console.log("Bookmark", action.payload);
      state.bookmark.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.bookmark = state.bookmark.filter(
        (quote) => quote._id !== action.payload._id
      );
    },
  },
});

export const { setTag, setQuote, addBookmark, removeBookmark } =
  quoteSlice.actions;

export default quoteSlice.reducer;


