import React from 'react'

export const MovieData = ({movie, platforms}) => {
  return (
    <div className="flex gap-x-10">
    <div className="w-96 flex flex-col gap-4">
      {movie.info.map((info) => (
        <div key={info.title}>
          <p className="text-fuente">{info.title}</p>
          <p className="text-fuente/15">{info.content}</p>
        </div>
      ))}
      <div key="movie-genres">
        <p className="text-fuente">Generos</p>
        <p className="text-fuente/15">{movie.genres.join(", ")}</p>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-medium text-fuente">
        Puedes verla en estas plataformas
      </h2>
      <div className="flex gap-x-10">
        {platforms &&
          platforms.map((platform) => (
            <div className="h-24 w-28 rounded-lg overflow-hidden shadow-xl  hover:scale-110 hover:cursor-pointer hover:shadow-xl">
              <img
                key={platform.name}
                src={`${platform.logo}`}
                alt={`${platform.name} logo`}
                className="object-cover h-full w-full"
              />
            </div>
          ))}
      </div>
    </div>
  </div>
  )
}
