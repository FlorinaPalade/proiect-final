import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, MoviePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/title/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
