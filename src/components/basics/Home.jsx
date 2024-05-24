import React from "react";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { SemanalMovie } from "./SemanalMovie";
import { Carousel } from "./Carousel";

import "./Carousel.css";
import { useContext } from "react";
import { ChatAI } from "./ChatAI";
import { HomeContext } from "./HomeContext";
import { Avatar } from "./Avatar";
import { useNavigate, Link } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const {
    movies,
    series,
    populares,
    terror,
    accion,
    aventura,
    fantasia,
    comedia,
    docs,
  } = useContext(HomeContext);

  window.addEventListener("scroll", () => {
    const isTabletOrDesktop = window.innerWidth > 1023;
    if (!isTabletOrDesktop) return;
    const carouselHomeTransitioner = document.querySelector(
      "#carousel-homepage-transitioner"
    );

    if (window.scrollY > 0 && carouselHomeTransitioner) {
      carouselHomeTransitioner.style.visibility = "visible";
      carouselHomeTransitioner.style.opacity = 1;
    } else if (window.scrollY === 0 && carouselHomeTransitioner) {
      carouselHomeTransitioner.style.opacity = 0;
      setTimeout(() => {
        carouselHomeTransitioner.style.visibility = "hidden";
      }, 400);
    }
  });

  const handleClick = (event) => {
    navigate("/recomendations", { state: { genre: event.genre } });
  };

  const handleClickType = (event) => {
    navigate("/recomendations", { state: { type: event.type } });
  };

  return movies.length > 0 ? (
    <div className="w-full p-0 m-0 bg-fondo flex items-center flex-col carousel">
      <Header />
      <ChatAI />
      <div className="fade-in-anim transition duration-300 ease-in-out relative">
        <div
          id="carousel-homepage-transitioner"
          className="absolute inset-0 transitioner z-10"
        ></div>
        <Carousel slides={populares} />
      </div>
      <div
        id="homepage-main-content"
        className="w-full md:fade-in-anim z-10 px-2"
      >
        <div className="space-y-4 mt-6 md:mt-0">
          <div className="space-y-2">
            <button
              onClick={(event) => {
                event.type = "movies";
                handleClickType(event);
              }}
              className="group w-full md:w-auto"
            >
              <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl group-hover:text-accent">
                PELÍCULAS
              </h1>
            </button>
            <Slider movies={movies} />
          </div>
          <div className="space-y-2">
          <button
              onClick={(event) => {
                event.type = "series";
                handleClickType(event);
              }}
              className="group w-full md:w-auto"
            >
            <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl group-hover:text-accent">
              SERIES
            </h1>
          </button>
            <Slider movies={series} />
          </div>
        </div>
      </div>
      <section className="mt-16 mb-16 lg:pt-14 bg-gradient-to-b from-fondo via-accent/15 to-fondo">
        <h1 className="inline-block md:pl-2 text-fuente/70 text-2xl font-bold w-full text-center lg:text-start md:text-4xl">
          RECOMENDACIÓN SEMANAL
        </h1>
        <SemanalMovie
          title="La Sociedad de la Nieve"
          imageUrl="https://pics.filmaffinity.com/La_sociedad_de_la_nieve-323264210-large.jpg"
          year="2024"
          description="Un avión uruguayo en el que viajan los jugadores del equipo de rugby del Old Christians Club de Montevideo se estrella en la cordillera de los Andes y los supervivientes deben sobreponerse a las condiciones extremas para mantenerse vivos."
        />
      </section>
      <div
        id="homepage-main-content"
        className="w-full md:fade-in-anim z-10 px-2 lg:mt-12"
      >
        <div className="mt-6 md:mt-0 space-y-6">
          <div className="flex flex-col gap-0">
            <button
              onClick={(event) => {
                event.genre = { genreApi: "adventure", genre: "acción" };
                handleClick(event);
              }}
              className="group w-full md:w-auto"
            >
              <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl group-hover:text-accent">
                ACCIÓN
              </h1>
            </button>
            <Slider movies={accion} />
          </div>
          <div className="flex flex-col gap-0">
            <button
              onClick={(event) => {
                event.genre = { genreApi: "adventure", genre: "aventura" };
                handleClick(event);
              }}
              className="group w-full md:w-auto"
            >
              <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl group-hover:text-accent">
                AVENTURA
              </h1>
            </button>
            <Slider movies={aventura} />
          </div>
          <div className="flex flex-col gap-0">
            <button
              onClick={(event) => {
                event.genre = { genreApi: "fantasy", genre: "fantasía" };
                handleClick(event);
              }}
              className="group w-full md:w-auto"
            >
              <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl group-hover:text-accent">
                FANTASÍA
              </h1>
            </button>
            <Slider movies={fantasia} />
          </div>
          <div className="flex flex-col gap-0">
            <button
              onClick={(event) => {
                event.genre = { genreApi: "horror", genre: "terror" };
                handleClick(event);
              }}
              className="group w-full md:w-auto"
            >
              <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl group-hover:text-accent">
                TERROR
              </h1>
            </button>
            <Slider movies={terror} />
          </div>
          <div className="flex flex-col gap-0">
            <button
              onClick={(event) => {
                event.genre = { genreApi: "comedy", genre: "comedia" };
                handleClick(event);
              }}
              className="group w-full md:w-auto"
            >
              <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl group-hover:text-accent">
                COMEDIA
              </h1>
            </button>
            <Slider movies={comedia} />
          </div>
          <div className="flex flex-col gap-0">
            <button
              onClick={(event) => {
                event.genre = {
                  genreApi: "documentary",
                  genre: "documentales",
                };
                handleClick(event);
              }}
              className="group w-full md:w-auto"
            >
              <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl group-hover:text-accent">
                DOCUMENTALES
              </h1>
            </button>
            <Slider movies={docs} />
          </div>
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  ) : (
    <section className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-96 h-96 flex justify-center relative">
        <Avatar />
      </div>
      <h2 className="text-accent font-bold text-2xl text-center m-5 relative z-10">
        Estoy preparando preparando la página para ti...
      </h2>
    </section>
  );
};
