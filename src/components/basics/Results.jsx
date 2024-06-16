import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { ResultCard } from "./ResultCard";
import { GenreProvider } from "./GenreContext";
import { Avatar } from "./Avatar";
import { Button } from "@/components/ui/button";

export const Results = () => {
  const location = useLocation();
  const prompt = location.state.prompt || "";
  let genreApi = "";
  let genre = "";
  let genreObj = location.state.genre;
  if (genreObj) {
    genre = genreObj.genre;
    genreApi = genreObj.genreApi;
  }
  const type = location.state.type || "";
  const movieTitle = location.state.movieTitle || "";
/*   console.log("movieTitle", movieTitle); */


  const [recomendations, setRecomendations] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [actualValue, setActualValue] = useState("");
  const [validateFlag, setValidateFlag] = useState(false);

  useEffect(() => {
    if (prompt !== "") {
      setActualValue(prompt);
    } else if (genre !== "") {
      setActualValue(genre);
    } else if (type !== "") {
      setActualValue(type);
    } else if (movieTitle.searchQuery !== "") {
      setActualValue(movieTitle.searchQuery);
    }
  }, []);

  useEffect(() => {
    const fetchMovie = async (movieTitle) => {
      console.log("movieTitle", movieTitle);
      try {
        const response = await axios.get(
          `https://webir-backend.onrender.com/movie2?movieTitle=${encodeURIComponent(
            movieTitle
          )}&type=movie`
        );
        console.log(response.data);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    if (movieTitle === "" || !movieTitle) return;
    fetchMovie(movieTitle);
  }, [movieTitle]);

  useEffect(() => {
    if (type !== "" || genreApi !== "" || movieTitle !== "") return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.post("http:/generate", {
          prompt,
        });
        setRecomendations(res.data);
        localStorage.setItem(`${prompt}`, JSON.stringify(res.data));
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
      
    };
    fetchData();
  }, [prompt]);

  useEffect(() => {
    if (prompt !== "" || type !== "" || movieTitle !== "")
      return;
    const fetchByGenre = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `https://webir-backend.onrender.com/genre?genre=${genreApi}`
        );
        const aux = res.data;
        const orderByPopularity = aux
          .concat(movies)
          .sort((a, b) => b.popularity - a.popularity);
        const removeDuplicates = orderByPopularity.filter(
          (v, i, a) => a.findIndex((t) => t.id === v.id) === i
        );
        setMovies((prevMovies) => [...prevMovies, ...removeDuplicates]);
        localStorage.setItem(`${genre}`, JSON.stringify(res.data));
      } catch (error) {
        console.error("Error fetching movies by genre:", error);
      }
      setIsLoading(false);
    };
    fetchByGenre();
  }, [genre]);

  useEffect(() => {
    if (prompt !== "" || genreApi !== "" || movieTitle !== "")
      return;
    const fetchByType = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://webir-backend.onrender.com/${type}`
        );
        const aux = response.data;
        const orderByPopularity = aux
          .concat(movies)
          .sort((a, b) => b.popularity - a.popularity);
        const removeDuplicates = orderByPopularity.filter(
          (v, i, a) => a.findIndex((t) => t.id === v.id) === i
        );
        setMovies((prevMovies) => [...prevMovies, ...removeDuplicates]);
        localStorage.setItem(`${type}`, JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching movies by type:", error);
      }
      setIsLoading(false);
    };
    fetchByType();
  }, [type]);

  const refreshData = () => {
    localStorage.removeItem(`${actualValue}`);
    window.location.reload();
  };

  useEffect(() => {
    const fetchMovie = async (movieTitle) => {
      try {
        const response = await axios.get(
          `https://webir-backend.onrender.com/movie?movieTitle=${encodeURIComponent(
            movieTitle
          )}&type=movie`
        );
        if (response.data.results.length > 0) {
          return response.data.results.filter(
            (movie) => !movies?.some((prevMovie) => prevMovie.id === movie.id)
          );
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const validateMovies = async (moviesToValidate) => {
      try {
        let moviesToValidateData = [];
        moviesToValidate.forEach((movie) => {
          if (movie && movie.name) {
            moviesToValidateData.push({
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              overview: movie.overview,
              year: movie.year,
              genre_ids: movie.genre_ids,
              name: movie.name,
              cast: movie.cast,
            });
          } else if(movie) {
            moviesToValidateData.push({
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              overview: movie.overview,
              year: movie.year,
              genre_ids: movie.genre_ids,
              cast: movie.cast,
            });
          }
        });
        console.log(moviesToValidateData.length)
        const res = await axios.post("https://webir-backend.onrender.com/validate", {
          recommendations: moviesToValidateData,
          prompt,
        });
        return res.data;
      } catch (error) {
        console.error("Error validating movies:", error);
      }
    };

    const fetchAllMovies = async () => {
      if (recomendations.length > 0 && movies.length === 0) {
   
        setIsLoading(true);
    
        const fetchMovieWithCatch = async (recomend) => {
          try {
            return await fetchMovie(recomend);
          } catch (error) {
            console.error(`Error fetching movie for recommendation ${recomend}:`, error);
            return null; // Return null or some fallback value
          }
        };
        console.log("llamo a fetch")
        const newMovies = await Promise.all(
          recomendations.map((recomend) => fetchMovieWithCatch(recomend))
        );
        console.log("termino de fetch")
    
        // Filter out null values (or any other fallback values)
        
        const mergedMovies = await newMovies.flat();
        const validMovies = await mergedMovies.filter(movie => movie !== null);
        console.log("llamo a validar")
        const validated = await validateMovies(validMovies);
        console.log("termino de validar")
    
        // Función que remueve las películas o series duplicadas si el título e id son iguales
        const uniqueMovies = await validated.results.filter(
          (v, i, a) => a.findIndex((t) => t.id === v.id) === i
        );
    
        setMovies(uniqueMovies);
        setIsLoading(false);
      }
    };
    
    fetchAllMovies();
  }, [recomendations]);

  

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
          {prompt != "" ? (
            <h2 className="text-accent font-bold text-2xl text-center m-5">
              Te Recomendamos:
            </h2>
          ) : (
            <h2 className="text-accent font-bold text-2xl text-center m-5">
              {genre
                ? `Películas y Series de ${genre}`
                : type == "movies"
                ? "Películas"
                : type == "series"
                ? "Series"
                : `Películas y Series con nombre ${movieTitle}`}
            </h2>
          )}

          <div className="grid lg:grid-cols-6 grid-cols-3 w-full h-fit gap-4 justify-items-center">
            <GenreProvider>
              {movies?.length > 0 &&
                movies.map((movie, index) => (
                  <ResultCard
                    key={index}
                    title={movie?.title ? movie?.title : movie?.name}
                    year={movie?.year}
                    id={movie?.id}
                    isMovie={!movie?.name}
                    imageUrl={`http://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  />
                ))}
            </GenreProvider>
          </div>
          <div className="w-full flex justify-center my-2">
            <Button variant="secondary" onClick={() => refreshData()}>
              Recargar Resultados
            </Button>
          </div>
        </section>
      )}
    </main>
  );
};
