import React from "react";

export const Reparto = ({ reparto }) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-2 w-full">
      <h2 className="text-accent text-xl font-semibold">Reparto</h2>
      <div className="grid grid-cols-3 gap-4 lg:gap-y-4 justify-items-start">
        {reparto.map((actor) => (
          <div key={actor.name} className="flex flex-col items-center">
            <img
              src={actor.img}
              alt={actor.name}
              className="w-24 h-24 object-cover rounded-xl"
            />
            <p className="text-fuente font-medium text-center">{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
