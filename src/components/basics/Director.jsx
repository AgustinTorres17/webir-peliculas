import React from "react";

export const Director = ({ directors }) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-72">
      {directors.length === 1 ? (
        <h2 className="text-accent text-xl font-semibold">Director</h2>
      ) : (
        <h2 className="text-accent text-xl font-semibold">Directores</h2>
      )}

      <div className="flex gap-5 justify-center lg:justify-start">
        {directors.map((director) => (
          <div key={director.name} className="flex flex-col items-start text-center  gap-2">
            <img
              src={director.img}
              alt={director.name}
              className="w-24 h-24 object-cover rounded-xl"
            />
            <p className="text-fuente w-28 font-medium text-pretty">{director.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
