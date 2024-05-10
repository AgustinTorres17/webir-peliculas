import React from "react";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { SemanalMovie } from "./SemanalMovie";
import { Carousel } from "./Carousel";

import "./Carousel.css";
import { useEffect, useState } from "react";


export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  


  const images = [
    "https://4kwallpapers.com/images/wallpapers/avatar-the-last-3840x2160-13576.jpg",
    "https://images8.alphacoders.com/133/1335152.jpg",
    "https://wallpapercave.com/wp/wp10578910.jpg",
  ];

  useEffect(() => {
    fetchPeliculas();
    fetchSeries();
  }, []);

  const fetchPeliculas = async () => {
    const response = await fetch("http://localhost:3000/movies");
    const data = await response.json();
    setMovies(data.results);
  };

  const fetchSeries = async () => {
    const response = await fetch("http://localhost:3000/series");
    const data = await response.json();
    setSeries(data.results);
  }

  window.addEventListener("scroll", () => {
    // check if is tablet or desktop
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
  return (
    <div className="w-full p-0 m-0 bg-fondo flex items-center flex-col carousel">
      <Header />
      <div className="fade-in-anim transition duration-300 ease-in-out relative">
        <div
          id="carousel-homepage-transitioner"
          className="absolute inset-0 transitioner z-10"
        ></div>
        <Carousel slides={images} />
      </div>
      <div
        id="homepage-main-content"
        className="w-full md:fade-in-anim z-10 px-2"
      >
        <div className="space-y-4 mt-6 md:mt-0">
          <div className="space-y-2">
            <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl">
              PELÍCULAS
            </h1>
            <Slider
              movies={movies}
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl">
              SERIES
            </h1>
            <Slider
              movies={series}
            />
          </div>
        </div>
      </div>
      <section className="mt-16 lg:pt-14 bg-gradient-to-b from-fondo via-accent/15 to-fondo">
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
      <div className="h-6"></div>
    </div>
  );
};
