import React from "react";
import { Movie } from "./Movie";
import { Reparto } from "./Reparto";
import { Director } from "./Director";
import { MovieData } from "./MovieData";
import "../App.css";
import { Header } from "./Header";

export const MoviePage = () => {
  const movie = {
    img: "https://4kwallpapers.com/images/wallpapers/avatar-the-last-3840x2160-13576.jpg",
    title: "Avatar",
    description:
      "Avatar: La leyenda de Aang es una serie animada de televisión que se emitió en Nickelodeon de 2005 a 2008. La serie se centra en el viaje de Aang, un Avatar de 12 años y último superviviente de los Nómadas del Aire, y sus amigos mientras intentan poner fin a la guerra de la Nación del Fuego contra las otras naciones del mundo.",
    isFav: false,
    info: [
      {
        content: "9.2",
        title: "Calificacion",
      },
      { content: "3 temporadas", title: "Duracion" },
    ],
    genres: ["Aventura", "Fantasia", "Accion"],
    cast: [
      {
        name: "Aang",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/b/b0/Aang_img.jpg",
      },
      {
        name: "Katara",
        img: "https://i.pinimg.com/564x/6b/b4/bd/6bb4bd2f43fc2b985850a81cdea2ba71.jpg",
      },
      {
        name: "Sokka",
        img: "https://i.pinimg.com/736x/a3/54/56/a35456dc1fd62d895fae07b0bc0f1d8a.jpg",
      },
      {
        name: "Zuko",
        img: "https://cdn.staticneo.com/w/avatar/thumb/Zuko.JPG/250px-Zuko.JPG",
      },
      {
        name: "Iroh",
        img: "https://www.yaconic.com/wp-content/uploads/2019/07/Avatar-Tio-Iroh.webp",
      },
    ],
    directors: [
      {
        name: "Michael Dante DiMartino",
        img: "https://facts.net/wp-content/uploads/2023/10/16-mind-blowing-facts-about-michael-dante-dimartino-1698576595.jpg",
      },
      {
        name: "Bryan Konietzko",
        img: "https://play-lh.googleusercontent.com/jygpYr6aI4DlBwMnUHCkdkupo9rXeEZV1XsCsUGB3EElPpVkZCxypUXDtw3HHBSgWA=w3840-h2160-rw",
      },
    ],
  };

  const platforms = [
    {
      name: "Netflix",
      logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      color: "#FB686F",
    },
    {
      name: "Prime Video",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Amazon_Prime_Video_blue_logo_1.svg/2048px-Amazon_Prime_Video_blue_logo_1.svg.png",
      color: "#C0E3F9",
    },
    {
      name: "Disney+",
      logo: "https://www.infobae.com/new-resizer/YkDsvTgYCa5l3MIxr8t2z-ybRvc=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/CH7VJ2UAYJGIRAEMF2VLF5XKBU.png",
      color: "#6387A3",
    },
  ];
  return (
    <>
      <Header />
      <div className="w-full bg-fondo flex justify-center pt-12">
        <main className="bg-gradient-to-t from-fondo/70 to-fondo-claro flex flex-col gap-5 md:justify-center md:items-center w-fit shadow-primario/10 shadow-xl">
          <Movie movie={movie} />
          <MovieData platforms={platforms} movie={movie} />
          <div className="flex flex-col md:flex-row gap-10 p-5 justify-center w-full ">
            <div className="w-96 ">
              <Reparto reparto={movie.cast} />
            </div>
            <Director directors={movie.directors} />
          </div>
        </main>
      </div>
    </>
  );
};
