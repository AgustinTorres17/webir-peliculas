import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MovieCard } from "./MovieCard";

export const Slider = ({ movies }) => {
  
  return (
    <Carousel>
      <CarouselContent className="flex gap-4 cursor-grab justify-start">
        {movies.map((movie, index) => (
          <CarouselItem className="basis-auto pl-0" key={index}>
            <div className="w-32 md:w-52 ">
              <MovieCard
                title={movie.title}
                genre={movie.genre_ids}
                year={movie.release_date}
                imageUrl={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
