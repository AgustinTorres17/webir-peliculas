import React, { useState, useEffect } from "react";

export const Director = ({ directors }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasDirectors, setHasDirectors] = useState(false);

  useEffect(() => {
    if (directors && directors.crew) {
      setIsLoading(false);
      setHasDirectors(directors.crew.some(director => director.known_for_department === "Directing"));
    }
  }, [directors]);

  return (
    <div className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-72">
      <h2 className="text-accent text-xl font-semibold">Director/es</h2>
      <div className="w-full">
        {isLoading ? (
          <p className="text-white">Cargando directores...</p>
        ) : hasDirectors ? (
          <div className="grid grid-cols-3 gap-4 lg:gap-y-4 justify-items-start w-full">
            {directors.crew
              .filter((director, index, self) =>
                index === self.findIndex(d => d.name === director.name && d.known_for_department === "Directing")
              )
              .slice(0, 6)
              .map(director => (
                <div key={director.name} className="flex flex-col items-center text-fuente hover:text-accent transition-all duration-300">
                  <img
                    src={director.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${director.profile_path}`
                      : director.gender === 1
                        ? 'https://st2.depositphotos.com/9998432/48435/v/450/depositphotos_484354136-stock-illustration-default-avatar-photo-placeholder-grey.jpg'
                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgS9SYvmrKjl6dYiGM3YWSXac7J7K32P8V_wxZ0is1g&s'}
                    alt={director.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <p className="font-medium text-center">{director.name}</p>
                </div>
              ))}
          </div>
        ) : (
          <div className="w-full text-start">
            <p className="text-white">No hay información disponible sobre los directores</p>
          </div>
        )}
      </div>
    </div>
  );
};
