import React from "react";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { SemanalMovie } from "./SemanalMovie";
import { Carousel } from "./Carousel";

import "./Carousel.css";
import { useEffect, useState } from "react";
import { ChatAI } from "./ChatAI";



export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [populares, setPopulares] = useState([]);
  const [terror, setTerror] = useState([]);
  const [accion, setAccion] = useState([]);
  const [aventura, setAventura] = useState([]);
  const [fantasia, setFantasia] = useState([]);

  useEffect(() => {
    fetchPeliculas();
    fetchSeries();
    fetchPopulares();
    fetchTerror();
    fetchAccion();
    fetchAventura();
    fetchFantasia();
  }, []);

  const fetchAccion = async () => {
    try {
      const response = await fetch("https://webir-backend.onrender.com/accion");
      const data = await response.json();
      setAccion(data);
      console.log(data);
    } catch (error) {
      console.error("Error al obtener las películas de Accion:", error);
    }
  };

  const fetchAventura = async () => {
    try {
      const response = await fetch("https://webir-backend.onrender.com/aventura");
      const data = await response.json();
      setAventura(data);
      console.log(data);
    } catch (error) {
      console.error("Error al obtener las películas de Aventura:", error);
    }
  };

  const fetchFantasia = async () => {
    try {
      const response = await fetch("https://webir-backend.onrender.com/fantasia");
      const data = await response.json();
      setFantasia(data);
      console.log(data);
    } catch (error) {
      console.error("Error al obtener las películas de Fantasia:", error);
    }
  };
  
  const fetchTerror = async () => {
    try {
      const response = await fetch("https://webir-backend.onrender.com/terror");
      const data = await response.json();
      setTerror(data);
      console.log(data);
    } catch (error) {
      console.error("Error al obtener las películas de Terror:", error);
    }
  };

  const fetchPopulares = async () => {
    try {
      const response = await fetch("https://webir-backend.onrender.com/popular");
      const data = await response.json();
      setPopulares(data);
    } catch (error) {
      console.error("Error al obtener las películas populares:", error);
    }
  };

  const fetchPeliculas = async () => {
    const response = await fetch("https://webir-backend.onrender.com/movies");
    const data = await response.json();
    setMovies(data.results);
  };

  const fetchSeries = async () => {
    const response = await fetch("https://webir-backend.onrender.com/series");
    const data = await response.json();
    setSeries(data.results);
  };


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
            <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl">
              PELÍCULAS
            </h1>
            <Slider movies={movies} />
          </div>
          <div className="space-y-2">
            <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl">
              SERIES
            </h1>
            <Slider movies={series} />
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
      <div
        id="homepage-main-content"
        className="w-full md:fade-in-anim z-10 px-2"
      >
        <div className="space-y-4 mt-6 md:mt-0">
          <div className="space-y-2">
            <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl">
              ACCION
            </h1>
            <Slider movies={accion.results} />
          </div>
          <div className="space-y-2">
            <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl">
              AVENTURA
            </h1>
            <Slider movies={aventura.results} />
          </div>
          <div className="space-y-2">
            <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl">
              FANTASIA
            </h1>
            <Slider movies={fantasia.results} />
          </div>
          <div className="space-y-2">
            <h1 className="text-fuente/70 text-xl font-bold w-full text-center md:text-start md:text-4xl">
              TERROR
            </h1>
            <Slider movies={terror.results} />
          </div>
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  );
};
