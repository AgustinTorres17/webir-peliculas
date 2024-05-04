import React from "react";

export const Director = ({ directors }) => {
  return (
    <div className="text-start">
      {directors.length === 1 ? (
        <h2 className="text-accent text-xl font-semibold">Director</h2>
      ) : (
        <h2 className="text-accent text-xl font-semibold">Directors</h2>
      )}

      <div className="flex gap-5 justify-start">
        {directors.map((director) => (
          <div key={director.name} className="flex flex-col items-start gap-2">
            <img
              src={director.img}
              alt={director.name}
              className="w-28 h-28 object-cover rounded-xl"
            />
            <p className="text-fuente w-28 font-medium text-pretty">{director.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
