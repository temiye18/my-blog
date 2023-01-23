import { Routes, Route, Navigate } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/blogs" />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
