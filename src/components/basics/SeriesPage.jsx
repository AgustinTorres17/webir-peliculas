import React from "react";
import { Movie } from "./Movie";
import { Reparto } from "./Reparto";
import { Director } from "./Director";
import { MovieData } from "./MovieData";
import "../App.css";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const SeriesPage = () => {
  const serieId  =  window.location.href.split("/").pop();
  const [serie, setSerie] = useState([]);
  const [cast, setCast] = useState([]);
  const [providers, setProviders] = useState([]);
  const [isMovie, setIsMovie] = useState(true);
  const [trailers, setTrailer] = useState([]);

  useEffect(() => {
    fetchMovie(serieId);
  }, []);

  const fetchMovie = async (serieId) => {
    //console.log('Movie ID', serieId);
    try {
      const response = await fetch(`https://webir-backend.onrender.com/serie/${serieId}`);
      if (!response.ok) {
        return
        //throw new Error("Error al obtener detalles de la película");
      }
      const data = await response.json();
      setSerie(data);
    } catch (error) {
      //console.error("Error al obtener detalles de la película:", error);
    }
  };


  useEffect(() => {
    if (serie) { 
      fetchCast(serie.id);
      fetchProviders(serie.id);
      fetchTrailerSerie(serie.id);
    }
  }, [serie]);

  const fetchCast = async (serieId) => {
    try { 
      const response = await fetch(`https://webir-backend.onrender.com/serie/cast/${serieId}`);
      const data = await response.json();
      setCast(data);
    } catch (error) {
      console.error("Error al obtener el reparto de la película:", error);
    }
  };

  
const fetchTrailerSerie = async (serieId) => {
  try {
      const response = await fetch(`http://localhost:3000/serie/trailer/${serieId}`);
      const data = await response.json();
      const trailer = data.results.find(result => result.type === "Teaser" || result.type === "Trailer");
      if (trailer) {
          setTrailer(trailer);
      }
  } catch (error) {
  }
};

  const fetchProviders = async (serieId) => {
    try { 
      const response = await fetch(`https://webir-backend.onrender.com/serie-providers?serieId=${serieId}`);
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setProviders(data);
    } catch (error) {
      console.error("Error al obtener el reparto de la película:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full bg-fondo flex justify-center ">
        <main className="bg-gradient-to-t from-fondo-claro/20 via-fondo to-fondo-claro/20 flex flex-col gap-5 md:justify-center md:items-center lg:w-fit w-[70%] shadow-primario/10 shadow-xl">
          <Movie movie={serie} trailer={trailers.key}/>
          <MovieData providers={providers} movie={serie} />
          <div className="flex flex-col lg:flex-row gap-10 p-5 justify-start w-full">
            <div className="w-full lg:w-72">
              <Reparto reparto={cast} />
            </div>
            <Director directors={cast} />
          </div>
        </main>
      </div>
    </>
  );
};
