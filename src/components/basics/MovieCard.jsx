import React from "react";
import { Button } from "@/components/ui/button";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieCard = ({ title, genre, year, imageUrl }) => {
  const [genres, setGenres] = useState([]);
  const [genresNamesStr, setGenresNamesStr] = useState("");
  useEffect(() => {
    if (!genre) return;
    fetchGenres();
  }, []);

  useEffect(() => {
    if (genres.length > 0) {
      getGenresName();
    }
  }, [genres]);

  const fetchGenres = async () => {
    const res = await fetch(`http://localhost:3000/genres`);
    const data = await res.json();
    setGenres(data.genres);
  };

  const getGenresName = () => {
    const genresNames = [];
    genre.forEach((id) => {
      genres.forEach((genre) => {
        if (genre.id === id) {
          genresNames.push(genre.name);
        }
      });
    });
    setGenresNamesStr(genresNames.join(", "));
  };
  return (
    <div className="relative overflow-hidden aspect-[9/16]">
      <img
        className="object-cover h-full w-full transform transition duration-500 ease-in-out hover:scale-110 active:scale-110"
        src={imageUrl}
        alt={title}
      />
      <div className="absolute inset-0 text-center text-pretty bg-black bg-opacity-60 flex flex-col items-center justify-between md:justify-center md:p-4 md:gap-1 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-500">
        <div className="md:hidden"></div>
        <h2 className="text-sm md:text-lg font-semibold text-white leading-6">
          {title} ({year})
        </h2>
        <p className="md:text-sm text-white text-opacity-50 hidden md:block">
          {genresNamesStr}
        </p>
        <div className="w-full pb-1 flex  justify-center">
          <Link to="/movie">
            <Button variant="default">Ver Detalles</Button>
          </Link>
          <Button variant="favedMovie" className="ml-5 hidden md:block">
            <FaPlusCircle></FaPlusCircle>
          </Button>
        </div>
      </div>
    </div>
  );
};
