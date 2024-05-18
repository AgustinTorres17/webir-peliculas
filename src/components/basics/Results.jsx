import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { ResultCard } from "./ResultCard";
import { GenreProvider } from "./GenreContext";
import { ChatAI } from "./ChatAI";
import { Avatar } from "./Avatar";

export const Results = () => {
  const location = useLocation();
  const prompt = location.state.prompt || "";
  const [recomendations, setRecomendations] = useState([]);
  const [movies, setMovies] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecomendations = async () => {
    if (prompt.length < 10 || hasFetched) return;
    console.log("Fetching recommendations for prompt:", prompt);
    try {
      const res = await axios.post("https://webir-backend.onrender.com/generate", {
        prompt,
      });
      setRecomendations((prev) => [...prev, ...res.data]);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  /*   useEffect(() => {
    console.log("Recommendations:", recomendations);
  }, [recomendations]); */

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (hasFetched || recomendations.length > 0) return;
        setHasFetched(true);
        setIsLoading(true);
        await fetchRecomendations();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  /* useEffect(() => {
    if (prompt.length >= 10 && recomendations.length < 1) {
      fetchRecomendations();
    }
  }, [prompt]); */

  const fetchMovie = async (movieTitle) => {
    try {
      const response = await fetch(
        `https://webir-backend.onrender.com/movie?movieTitle=${encodeURIComponent(
          movieTitle
        )}&type=movie`
      );
      if (!response.ok) {
        throw new Error("Error al obtener detalles de la película");
      }
      const data = await response.json();
      if (data.results.length < 1) return;

      setMovies((prevMovies) => {
        const newMovies = data.results.filter(
          (movie) => !prevMovies.some((prevMovie) => prevMovie.id === movie.id)
        );
        setIsLoading(false);
        return [...prevMovies, ...newMovies];
      });
    } catch (error) {
      console.error("Error al obtener detalles de la película:", error);
    }
  };

  useEffect(() => {
    if (recomendations.length > 0) {
      recomendations.forEach(async (recomend) => {
        if (movies.length < 24) {
          await fetchMovie(recomend);
        }
      });
    }
  }, [recomendations]);

  return (
    <main className="flex flex-col w-full">
      <Header />
      {isLoading ? (
        <section className="h-full flex flex-col items-center">
          <div className="w-96 h-96 flex relative">
            <Avatar />
          </div>
          <h2 className="text-accent font-bold text-2xl text-center m-5">
            Estoy buscando las mejores películas para ti...
          </h2>
        </section>
      ) : (
        <section className="px-5">
          <h2 className="text-accent font-bold text-2xl text-center m-5">
            Te Recomendamos:
          </h2>
          <div className="grid lg:grid-cols-6 grid-cols-3 w-full h-fit gap-4 justify-items-center">
            <GenreProvider>
              {movies.length > 0 &&
                movies.map((movie, index) => (
                  <ResultCard
                    key={index}
                    title={movie.title}
                    year={movie.year}
                    id={movie.id}
                    isMovie={movie.name ? false : true}
                    imageUrl={
                      "http://image.tmdb.org/t/p/w500/" + movie?.poster_path
                    }
                  />
                ))}
            </GenreProvider>
          </div>
        </section>
      )}
    </main>
  );
};
