import React from "react";

export const Director = ({ directors }) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-72">
      <h2 className="text-accent text-xl font-semibold">Director/es</h2>
      <div className="grid grid-cols-3 gap-4 lg:gap-y-4 justify-items-start">
        {directors.crew ? (
          directors.crew
            .filter((director, index, self) =>
              index === self.findIndex(d => d.name === director.name && d.known_for_department === "Directing")
            )
            .slice(0, 6)
            .map(director => (
              <div key={director.name} className="flex flex-col items-center text-fuente hover:text-accent transition-all duration-300">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${director.profile_path}`}
                  alt={director.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <p className="font-medium text-center">{director.name}</p>
              </div>
            ))
        ) : (
          "Cargando directores..."
        )}
      </div>

    </div>
  );
};
