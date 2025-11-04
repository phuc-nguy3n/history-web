import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/Homepage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import PostDetailPage from "./pages/PostDetailPage.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
