import React from "react";
import { Button } from "../ui/button";
import { FaPlusCircle } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
export const Movie = ({ movie }) => {
  return (
    <div className="flex gap-x-10 flex-col md:flex-row p-5 md:justify-start w-full">
      <div className="flex h-96 items-start justify-start shadow-md shadow-fuente/5 w-full md:w-72 md:pt-2">
        {movie.img ? (
          <img
            src={movie.img}
            alt="Movie logo"
            className="object-cover h-full"
          />
        ) : (
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
            className="object-cover h-full"
            alt="no image found"
          />
        )}
      </div>
      <div className="flex flex-col gap-5 items-start justify-center w-full md:w-96 h-96">
        <div className="flex flex-col gap-2">
          <h2 className="text-accent text-3xl mt-5 md:mt-0 text-center w-full md:w-auto font-bold">
            {movie.title}
          </h2>
          <p className="text-fuente text-pretty text-center">
            {movie.description}
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
  );
};
