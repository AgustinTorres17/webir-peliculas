import React from 'react';
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import { MovieCard } from "./MovieCard";

export const Slider = ({movies}) => {
    return (
        <Carousel>
            <CarouselContent className="space-x-20">
                {movies.map((movie, index) => (
                    <CarouselItem className="md:basis-1/2 lg:basis-1/6" key={index}><MovieCard title={movie.title} genre={movie.genre} year={movie.year} imageUrl={movie.imageUrl} /></CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
