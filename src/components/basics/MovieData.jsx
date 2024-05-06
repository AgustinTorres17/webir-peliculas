import React from "react";

export const MovieData = ({ movie, platforms }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-5 w-full">
      <div className="flex flex-col gap-4">
        <div className="w-96 md:flex md:flex-col grid grid-cols-2 items-center md:items-start gap-4">
          {movie.info.map((info) => (
            <div className="text-center md:text-start" key={info.title}>
              <p className="text-fuente">{info.title}</p>
              <p className="text-accent">{info.content}</p>
            </div>
          ))}
        </div>
        <div
          key="movie-genres"
          className="w-full text-center md:w-96 md:text-start"
        >
          <p className="text-fuente">Géneros</p>
          <p className="text-accent">{movie.genres.join(", ")}</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start gap-2">
        <h2 className="text-xl font-medium text-fuente">
          Puedes verla en estas plataformas
        </h2>
        <div className="grid grid-cols-3 gap-3 md:flex md:gap-x-10">
          {platforms &&
            platforms.map((platform) => (
              <div
                key={platform.name}
                className="h-24 w-24 rounded-lg overflow-hidden shadow-xl  hover:scale-110 hover:cursor-pointer hover:shadow-xl"
              >
                <img
                  src={`${platform.logo}`}
                  alt={`${platform.name} logo`}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
