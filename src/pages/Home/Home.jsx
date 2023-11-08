import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import Navbar from "../../layout/Navbar/Navbar";
import "./Home.css";
import { useEffect } from "react";
import { setTag } from "../../redux/quoteSlice";
import { fetchTags } from "../../api/api";
import { useState } from "react";
import { fetchQuoteAsync } from "../../redux/quoteAction";

const Home = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState();
  const quote = useSelector((state) => state.quote.quote);
  const bookmark = false;

  useEffect(() => {
    const fetchTagsData = async () => {
      try {
        const response = await fetchTags();
        setTags(response);
        console.log("setTags", response);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchTagsData();
  }, []);

  const tagHandler = (tag) => {
    dispatch(setTag(tag));
    {
      tag && dispatch(fetchQuoteAsync(tag));
    }
  };

  useEffect(() => {
    dispatch(fetchQuoteAsync(null));
  }, []);

  useEffect(() => {
    tagHandler();
  }, []);

  const handleNextQuoteClick = () => {
    dispatch(fetchQuoteAsync(null));
  };

  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <Container
          quote={quote}
          fetchNewQuote={() => dispatch(fetchQuoteAsync(null))}
          bookmark={bookmark}
        />
        <select
          className="dropdown"
          onChange={(e) => tagHandler(e.target.value)}
        >
          {tags &&
            tags.map((tag) => (
              <option key={tag._id} value={tag.slug}>
                {tag.name}
              </option>
            ))}
        </select>
        <button onClick={handleNextQuoteClick}>Next Quote</button>
      </div>
    </div>
  );
};

export default Home;
