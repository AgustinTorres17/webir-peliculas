import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { ResultCard } from "./ResultCard";
import { GenreProvider } from "./GenreContext";
import { Avatar } from "./Avatar";

export const Results = () => {
  const location = useLocation();
  const prompt = location.state.prompt || "";
  const [recomendations, setRecomendations] = useState([]);
  const [movies, setMovies] = useState([]);
  const [validatedMovies, setValidatedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.post("https://webir-backend.onrender.com/generate", {
          prompt,
        });
        setRecomendations(res.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [prompt]);

  useEffect(() => {
    const fetchMovie = async (movieTitle) => {
      try {
        const response = await axios.get(
          `https://webir-backend.onrender.com/movie?movieTitle=${encodeURIComponent(
            movieTitle
          )}&type=movie`
        );
        if (response.data.results.length > 0) {
          setMovies((prevMovies) => {
            const newMovies = response.data.results.filter(
              (movie) =>
                !prevMovies.some((prevMovie) => prevMovie.id === movie.id)
            );
            return [...prevMovies, ...newMovies];
          });
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (recomendations.length > 0) {
      recomendations.forEach((recomend) => {
        fetchMovie(recomend);
      });
    }
  }, [recomendations]);

/* useEffect(() => {
  const validateMovies = async (moviesToValidate) => {
    try {
      const response = await axios.post("http://localhost:3000/validate", {
        recommendations: moviesToValidate,
        prompt,
      });
      const validatedResults = response.data;

      // Filtrar las películas válidas
      const validMovieIds = new Set();
      const newValidatedMovies = moviesToValidate.filter((movie, index) => {
        if (validatedResults[index]) {
          if (!validMovieIds.has(movie.id)) {
            validMovieIds.add(movie.id);
            return true;
          }
          return false;
        }
        return false;
      });

      setValidatedMovies(newValidatedMovies); // Reemplazar las películas validadas por completo
    } catch (error) {
      console.error("Error validating movies:", error);
    }
  };

  if (movies.length >= recomendations.length) {
    validateMovies(movies);
  }
}, [movies, prompt]); */


 

  return (
    <main className="flex flex-col w-full">
      <Header />
      {isLoading ? (
        <section className="h-full w-full flex flex-col items-center justify-center">
          <div className="w-96 h-96 flex justify-center relative">
            <Avatar />
          </div>
          <h2 className="text-accent font-bold text-2xl text-center m-5">
            Estoy buscando los mejores resultados para ti...
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
                    title={movie?.title}
                    year={movie?.year}
                    id={movie?.id}
                    isMovie={!movie?.name}
                    imageUrl={`http://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  />
                ))}
            </GenreProvider>
          </div>
        </section>
      )}
    </main>
  );
};
