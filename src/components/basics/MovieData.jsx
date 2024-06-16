import React from "react";
import { GenreContext } from "./GenreContext";
import { useState, useEffect, useContext } from "react";

export const MovieData = ({ movie, providers }) => {

  const { genres } = useContext(GenreContext);

  const getMovieGenresName = () => {
    const movieGenres = [];
    if (movie?.genres?.length > 0) {
      movie.genres.forEach((genre) => {
        movieGenres.push(genre.name);
      });
    }
    return movieGenres.join(", ");
  }

  
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-5 w-full">
      <div className="flex flex-col gap-4">
        <div className="w-full grid md:grid-cols-3 grid-cols-2 items-center gap-5 lg:flex lg:flex-col lg:text-start lg:w-72 lg:items-start">
          {movie ? (
            <div className="text-center lg:text-start">
              <p className="text-fuente">{"Calificacion"}</p>
              <p className="text-accent">{movie.vote_average}</p>
            </div>

          ) : ("")}

          {genres ? (
            <div className="text-center lg:text-start">
              <p className="text-fuente">{"Genero"}</p>
              <p className="text-accent">{getMovieGenresName().toString()}</p>
            </div>
          ) : ("Cargando géneros...")}

        </div>
      </div>
      <div className="flex flex-col text-center lg:items-start items-center gap-2 w-full">
        <h2 className="text-xl font-medium text-accent">
          Disponible en
        </h2>
        <div className="grid grid-cols-3 gap-2 md:flex md:gap-x-4 md:justify-items-center">
  {(providers && providers.results && providers.results?.UY) ? (
    providers.results?.UY.flatrate?.map((platform, index) => {
      let platformUrl = "#";
      
      console.log(platform.provider_name);

      switch (platform.provider_name.toLowerCase()) {
        case 'netflix':
          platformUrl = 'https://www.netflix.com/';
          break;
        case 'amazon prime video':
          platformUrl = 'https://www.primevideo.com/';
          break;
        case 'disney plus':
          platformUrl = 'https://www.disneyplus.com/';
          break;
        case 'hbo max':
          platformUrl = 'https://www.hbomax.com/';
          break;
        case 'hulu':
          platformUrl = 'https://www.hulu.com/';
          break;
        case "star plus":
          platformUrl = 'https://starplus.com/';
          break;
        case "max":
          platformUrl = 'https://www.max.com/';
          break;
        case "flixolé":
          platformUrl = 'https://www.flixole.com/';
          break;
        case "directv go":
          platformUrl = 'https://www.directvgo.com/';
          break;
        case "paramount plus":
          platformUrl = 'https://www.paramountplus.com/';
          break;
        default:
          platformUrl = providers.results.UY.link; 
      }

      return (
        <div
          key={index}
          className="h-20 w-20 md:h-24 md:w-24 rounded-lg overflow-hidden shadow-xl flex justify-center hover:scale-110 hover:cursor-pointer hover:shadow-xl transition-all duration-300"
        >
          <a href={platformUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={`https://image.tmdb.org/t/p/w500${platform.logo_path}`}
              alt={`${platform.provider_name} logo`}
              className="object-cover h-full w-full"
            />
          </a>
        </div>
      );
    })
  ) : (
    <div>
      <p>No disponible en Uruguay</p>
    </div>
  )}
</div>

      </div>
    </div>
  );
};
