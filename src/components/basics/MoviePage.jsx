import React from "react";
import { Movie } from "./Movie";
import { Reparto } from "./Reparto";
import { Director } from "./Director";
import { MovieData } from "./MovieData";

export const MoviePage = ({ movie, platforms }) => {
  return (
    <main className="p-5 bg-fondo flex flex-col gap-10 w-[1000px]">
      <Movie movie={movie} />
      <MovieData platforms={platforms} movie={movie}/>
      <div className="flex gap-10">
        <div className="w-96">
          <Reparto reparto={movie.cast} />
        </div>
        <Director directors={movie.directors} />
      </div>
    </main>
  );
};
