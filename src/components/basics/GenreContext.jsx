import React, { useState, useEffect, createContext, useContext } from "react";

const GenreContext = createContext();

const GenreProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const res = await fetch(`http://localhost:3000/genres`);
    const data = await res.json();
    setGenres(data.genres);
  };


  return (
    <GenreContext.Provider value={{ genres, setGenres }}>
      {children}
    </GenreContext.Provider>
  );
};

export { GenreProvider, GenreContext };
