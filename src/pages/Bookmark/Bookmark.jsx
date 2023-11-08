import { useSelector } from "react-redux";
import Navbar from "../../layout/Navbar/Navbar";
import "./Bookmark.css";
import Container from "../../components/Container/Container";
import { useEffect } from "react";
const Bookmark = () => {
  const bookmarks = useSelector((state) => state.quote.bookmark);
  // eslint-disable-next-line no-unused-vars
  const bookmark = true;

  const bookmarksData = bookmarks
    ? bookmarks
    : localStorage.getItem("bookmarks");

  useEffect(() => {
    const bookmarksJSON = JSON.stringify(bookmarks);

    localStorage.setItem("bookmarks", bookmarksJSON);
  }, [bookmarks]);
  return (
    <div className="bookmark">
      <Navbar />
      <div className="bookmark-container">
        {bookmarksData.map((bookmark) => (
          <Container quote={bookmark} key={bookmark._id} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
