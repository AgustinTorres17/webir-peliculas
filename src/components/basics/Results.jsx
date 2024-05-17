import React from "react";
import { Header } from "./Header";
import { ResultCard } from "./ResultCard";
import { GenreProvider } from "./GenreContext";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChatAI } from "./ChatAI";
export const Results = () => {
  const location = useLocation();
  const prompt = location.state.prompt;
  const [recomendations, setRecomendations] = useState([]);
  const [movies, setMovies] = useState([]);

  const fetchRecomendations = async () => {
    if (prompt.length < 10) return;
    console.log(prompt);
    const res = await axios.post("https://webir-backend.onrender.com/generate", {
      prompt: prompt,
    });
    setRecomendations(res.data);
    console.log(res.data); // Corrección: loguea la respuesta directamente
  };

  useEffect(() => {
    if (prompt.length < 10) return;
    fetchRecomendations();
  }, [prompt]); // Corrección: añade prompt como dependencia

  const fetchMovie = async (movieTitle) => {
    try {
      const response = await fetch(
        `https://webir-backend.onrender.com/movie?movieTitle=${movieTitle}&type=movie`
      );
      if (!response.ok) {
        throw new Error("Error al obtener detalles de la película");
      }
      const data = await response.json();
      if (data.results.length < 1) return;

      data.results.forEach((movie) => {
        if (movies.length >= 24) return; // Verifica si ya tenemos 12 películas
        if (movies.find((movieState) => movieState.title === movie.title))
          return; // Evita duplicados
        setMovies((prev) => {
          if (prev.length >= 24) return prev; // Verifica nuevamente para evitar agregar más de 12
          return [...prev, movie];
        });
        console.log(movies);
      });
    } catch (error) {
      console.error("Error al obtener detalles de la película:", error);
    }
  };

  useEffect(() => {
    if (recomendations.length === 0) return;
    recomendations.forEach(async (recomend) => {
      if (movies.length < 24) {
        await fetchMovie(recomend);
      }
    });
  }, [recomendations]);

  return (
    <main className="flex flex-col w-full">
      <Header />
      <section className="px-5">
        <h2 className="text-accent font-bold text-2xl text-center m-5">
          Te Recomendamos:
        </h2>
        <div className="grid lg:grid-cols-6 grid-cols-3 w-full h-fit gap-4  justify-items-center">
          <GenreProvider>
            {movies.length > 0 &&
              movies.map((movie, index) => (
                <ResultCard
                  key={index}
                  title={movie.title}
                  year={movie.year}
                  imageUrl={
                    "http://image.tmdb.org/t/p/w500/" + movie?.poster_path
                  }
                />
              ))}
          </GenreProvider>
        </div>
      </section>
    </main>
  );
};
