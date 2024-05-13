import React from "react";

export const Reparto = ({ reparto }) => {

  return (
    <div className="flex flex-col items-center lg:items-start gap-2 w-full">
      <h2 className="text-accent text-xl font-semibold">Reparto</h2>
      <div className="grid grid-cols-3 gap-4 lg:gap-y-4 justify-items-start">
        { reparto.cast ? (reparto.cast.slice(0, 6).map((actor) => (
          <div key={actor.name} className="flex flex-col items-center text-fuente hover:text-accent transition-all duration-300">
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              className="w-24 h-24 object-cover rounded-xl "
            />
            <p className=" font-medium text-center">{actor.name}</p>
          </div>) ) ) : ("Cargando reparto...")}

      </div>
    </div>
  );
};
