/* eslint-disable react/prop-types */
import "./Container.css";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../../redux/quoteSlice";

const Container = ({ quote, bookmark }) => {
  const dispatch = useDispatch();

  const addBookmarkHandler = () => {
    dispatch(addBookmark(quote));
  };
  const removeBookmarkHandler = () => {
    dispatch(removeBookmark(quote));
  };

  if (!quote) {
    return <div className="loading"> </div>;
  }
  return (
    <div className="container">
      <p>{quote.content}</p>
      <div>
        <span>Author - {quote.author}</span>
        {!bookmark ? (
          <BsFillBookmarkPlusFill
            className="icon"
            onClick={addBookmarkHandler}
          />
        ) : (
          <CiCircleRemove className="icon" onClick={removeBookmarkHandler} />
        )}
      </div>
    </div>
  );
};

export default Container;
