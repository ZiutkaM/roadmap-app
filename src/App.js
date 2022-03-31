import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RoadmapPage from "./pages/RoadmapPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="article/:name" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
