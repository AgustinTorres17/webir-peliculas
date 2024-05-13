import React from "react";
import { GenreContext } from "./GenreContext";
import { useState, useEffect, useContext } from "react";

export const MovieData = ({ movie, platforms }) => {

  const { genres } = useContext(GenreContext);

  const getMovieGenresName = () => {
    const movieGenres = [];
    if (movie.results) {
      movie.results[0].genre_ids.forEach((genreId) => {
        const genreName = genres.find((genre) => genre.id === genreId);
        movieGenres.push(genreName?.name);
      });
    }
    console.log(movieGenres);
    return movieGenres.join(", ");
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-5 w-full">
      <div className="flex flex-col gap-4">
        <div className="w-full grid md:grid-cols-3 grid-cols-2 items-center gap-5 lg:flex lg:flex-col lg:text-start lg:w-72 lg:items-start">
          {movie.results ? (
            <div className="text-center lg:text-start">
              <p className="text-fuente">{"Calificacion"}</p>
              <p className="text-accent">{movie.results[0].vote_average}</p>
            </div>

          ) : ("")}

          { genres ? (
            <div className="text-center lg:text-start">
              <p className="text-fuente">{"Genero"}</p>
              <p className="text-accent">{getMovieGenresName().toString()}</p>
            </div>
          ) : ("Cargando géneros...")}

        </div>
      </div>
      <div className="flex flex-col text-center lg:items-start items-center gap-2">
        <h2 className="text-xl font-medium text-accent">
          Disponible en
        </h2>
        <div className="grid grid-cols-3 gap-2 justify-items-start md:flex md:gap-x-4 md:justify-center">
          {platforms &&
            platforms.map((platform) => (
              <div
                key={platform.name}
                className="h-20 w-20 md:h-24 md:w-24 rounded-lg overflow-hidden shadow-xl flex justify-center hover:scale-110 hover:cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={`${platform.logo}`}
                  alt={`${platform.name} logo`}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
