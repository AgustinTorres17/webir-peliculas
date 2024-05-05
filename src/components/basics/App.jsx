import "../App.css";

import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviePage } from "./MoviePage";
import { SearchPage } from "./SearchPage";
import { Home } from "./Home";
import { MiLista } from "./MiLista";

function App() {


  return (
    <>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/miLista" component={<MiLista/>} />
        </Routes>
    </>
  );
}

export default App;
