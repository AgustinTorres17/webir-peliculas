import React from "react";
import { Button } from "../ui/button";
import { FaPlusCircle } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
export const Movie = ({ movie }) => {

  
  return (
    <div className="flex  flex-col lg:flex-row p-5 lg:justify-start w-full items-center">
      <div className="w-full flex gap-10 flex-col lg:flex-row justify-between items-center">
        <div className="flex h-96 items-start justify-start shadow-xl shadow-black/50 w-65 md:pt-2 hover:shadow-accent/50 hover:shadow-2xl transition-shadow duration-300">
          {movie.results ? (
            <img
              src={"http://image.tmdb.org/t/p/w500/" + movie.results[0].poster_path}
              alt="Movie logo"
              className="object-cover h-full"
            />
          ) : (
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              className="object-cover h-full z-10"
              alt="no image found"
            />
          )}
        </div>
        <div className="flex flex-col gap-5 items-start justify-start md:justify-start w-full md:w-96 h-fit">
          <div className="flex flex-col gap-2">
            <h2 className="text-accent text-3xl mt-5 md:mt-0 text-center w-full md:w-auto font-bold">
            {movie.results ? movie.results[0].title : ""}
            </h2>
            <p className="text-fuente text-pretty text-center md:text-start">
            {movie.results ? movie.results[0].overview : ""}
            </p>
          </div>
          <div className="w-full flex justify-center  gap-3">
            <Button variant={movie.isFav ? "favedMovie" : "unFavedMovie"}>
              <FaPlusCircle />
            </Button>
            <Button variant="ghost">
              <MdMovieCreation className="mr-2" />
              <span> </span>Ver Trailer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
