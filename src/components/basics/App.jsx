import "../App.css";
import { GenreProvider } from "./GenreContext";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviePage } from "./MoviePage";
import { SearchPage } from "./SearchPage";
import { Home } from "./Home";
import { MiLista } from "./MiLista";

function App() {
  return (
    <>
      <GenreProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:movieTitle" element={<MoviePage />} />
          <Route path="/mi-lista" component={<MiLista />} />
        </Routes>
      </GenreProvider>
    </>
  );
}

export default App;
