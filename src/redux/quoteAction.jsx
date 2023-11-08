import { fetchQuote } from "../api/api";
import { setQuote } from "./quoteSlice";

export const fetchQuoteAsync = (tag) => async (dispatch) => {
  try {
    const response = await fetchQuote(tag);
    dispatch(setQuote(response));
    return response;
  } catch (err) {
    console.error("Error in fetchQuoteAsync", err);
  }
};
