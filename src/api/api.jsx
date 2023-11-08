import axios from "axios";

const BASE_URL = "https://api.quotable.io";

export const fetchTags = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tags`);
    const tags = response.data;
    console.log("fetchTags", tags);
    return tags;
  } catch (err) {
    console.log("Error In Fetching Tags", err);
  }
};

export const fetchQuote = async (tag) => {
  try {
    let API = `${BASE_URL}/random`;
    if (tag) {
      API += `?tags=${tag}`;
    }

    const response = await axios.get(API);
    const quote = response.data;
    console.log("quote response", response);
    return quote;
  } catch (err) {
    console.error("Error in fetching quote", err);
  }
};
