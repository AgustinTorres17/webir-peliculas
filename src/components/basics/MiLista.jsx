import React from "react";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";
import { GenreProvider } from "./GenreContext";

export const MiLista = ({}) => {
  const movies = [];
  return (
    <main className="flex flex-col w-full">
      <Header />
      <section className="px-5">
        <h2 className="text-accent font-bold text-4xl lg:text-center lg:m-5">
          FAVORITAS
        </h2>
        <div class="grid  lg:grid-cols-4 grid-cols-2 w-full h-fit gap-4  justify-items-center">
          <GenreProvider>
            {movies.length > 0 && movies.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                genre={movie.genre}
                year={movie.year}
                imageUrl={movie.imageUrl}
              />
            ))}
          </GenreProvider>
        </div>
      </section>
    </main>
  );
};
