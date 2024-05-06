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
            <MovieCard
              title={movie.title}
              genre={movie.genre}
              year={movie.year}
              imageUrl={movie.imageUrl}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
