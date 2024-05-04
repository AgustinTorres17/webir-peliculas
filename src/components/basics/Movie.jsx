import React from "react";
import { Button } from "../ui/button";
import { FaPlusCircle } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
export const Movie = ({ movie }) => {
  return (
    <div className="flex gap-x-10">
      <div className="flex items-start h-fit shadow-md shadow-fuente/5 max-w-96">
        {movie.img ? (
          <img
            src={movie.img}
            alt="Movie logo"
            className="object-cover"
          />
        ) : (
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
            className="object-cover"
            alt="no image found"
          />
        )}
      </div>
      <div className="flex flex-col gap-5 items-start">
        <h2 className="text-3xl font-bold text-fuente">{movie.title}</h2>
        <p className="text-fuente text-pretty">{movie.description}</p>
        <div className="w-full flex justify-end gap-3">
          <Button variant={movie.isFav ? "favedMovie" : "default"}>
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
