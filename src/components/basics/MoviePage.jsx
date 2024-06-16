import React from "react";
import { Movie } from "./Movie";
import { Reparto } from "./Reparto";
import { Director } from "./Director";
import { MovieData } from "./MovieData";
import "../App.css";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const MoviePage = () => {
  const movieId  =  window.location.href.split("/").pop();
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [providers, setProviders] = useState([]);
  const [isMovie, setIsMovie] = useState(true);
  const [trailers, setTrailer] = useState([]);

  useEffect(() => {
    fetchMovie(movieId);
  }, []);

  const fetchMovie = async (movieId) => {
    try {
      const response = await fetch(`https://webir-backend.onrender.com/movie/${movieId}`);
      if (!response.ok) {
        return
      }
      const data = await response.json();
      setMovie(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    if (movie) { 
      fetchCast(movie.id);
      fetchProviders(movie.id);
      fetchTrailerMovie(movie.id);
      }
  }, [movie]);

  const fetchCast = async (movieId) => {
    try { 
      const response = await fetch(`https://webir-backend.onrender.com/movie/cast/${movieId}`);
      const data = await response.json();
      setCast(data);
    } catch (error) {
      console.error("Error al obtener el reparto de la película:", error);
    }
  };

  const fetchTrailerMovie = async (movieId) => {
    try {
        const response = await fetch(`http://localhost:3000/movie/trailer/${movieId}`);
        const data = await response.json();
        const trailer = data.results.find(result => result.type === "Teaser" || result.type === "Trailer");

        if (trailer) {
            setTrailer(trailer);
        } 
    } catch (error) {
    }
};

  const fetchProviders = async (movieId) => {
    try { 
      const response = await fetch(`https://webir-backend.onrender.com/movie-providers?movieId=${movieId}`);
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setProviders(data);
    } catch (error) {
      console.error("Error al obtener los proveedeores de la película:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full bg-fondo flex justify-center ">
        <main className="bg-gradient-to-t from-fondo-claro/20 via-fondo to-fondo-claro/20 flex flex-col gap-5 md:justify-center md:items-center lg:w-fit w-[70%] shadow-primario/10 shadow-xl">
          <Movie movie={movie} trailer={trailers.key}/>
          <MovieData providers={providers} movie={movie} />
          <div className="flex flex-col lg:flex-row gap-10 p-5 justify-start w-full">
            <div className="w-full lg:w-72">
              <Reparto reparto={cast} />
            </div>
            <Director directors={cast} />
          </div>
        </main>
      </div>
    </>
  );
};
