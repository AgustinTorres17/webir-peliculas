import React, { createContext, useState, useEffect } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [populares, setPopulares] = useState([]);
  const [terror, setTerror] = useState([]);
  const [accion, setAccion] = useState([]);
  const [aventura, setAventura] = useState([]);
  const [fantasia, setFantasia] = useState([]);
  const [comedia, setComedia] = useState([]);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchHome = async () => {
      const res = await fetch("https://webir-backend.onrender.com/get-data-home");
      const {
        popularData,
        pelis,
        tvs,
        fantasiaPelis,
        accionPelis,
        horrorPelis,
        aventuraPelis,
        comediaPelis,
        docs,
      } = await res.json();
      setMovies(pelis);
      setSeries(tvs);
      setPopulares(popularData);
      setTerror(horrorPelis);
      setAccion(accionPelis);
      setAventura(aventuraPelis);
      setFantasia(fantasiaPelis);
      setComedia(comediaPelis);
      setDocs(docs);
    };

    fetchHome();
  }, []);

  return (
    <HomeContext.Provider
      value={{ movies, series, populares, terror, accion, aventura, fantasia, comedia, docs}}
    >
      {children}
    </HomeContext.Provider>
  );
};
