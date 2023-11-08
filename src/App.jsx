import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bookmark from "./pages/Bookmark/Bookmark";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </Router>
  );
}

export default App;
