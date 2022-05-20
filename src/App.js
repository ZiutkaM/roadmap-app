import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoadmapPage from "./pages/RoadmapPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";

function App() {
  const [checked, setChecked] = useState(
    false
    //localStorage.getItem(checked) === "true"
  );

  return (
    <div className="App">
      <NavBar checked={checked} />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="roadmap"
          element={<RoadmapPage checked={checked} setChecked={setChecked} />}
        />
        <Route path="article/:name" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
