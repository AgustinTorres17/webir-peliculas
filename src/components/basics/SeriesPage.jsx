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

 /*  useEffect(() => {
    console.log(serie);
  }, [serie]); */


  useEffect(() => {
    if (serie) { 
      fetchCast(serie.id);
      fetchProviders(serie.id);
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

  const fetchProviders = async (serieId) => {
    try { 
      const response = await fetch(`http://localhost:3000/serie-providers?serieId=${serieId}`);
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setProviders(data);
    } catch (error) {
      console.error("Error al obtener el reparto de la película:", error);
    }
  };


/*   const platforms = [
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
  ]; */
  return (
    <>
      <Header />
      <div className="w-full bg-fondo flex justify-center ">
        <main className="bg-gradient-to-t from-fondo-claro/20 via-fondo to-fondo-claro/20 flex flex-col gap-5 md:justify-center md:items-center lg:w-fit w-[70%] shadow-primario/10 shadow-xl">
          <Movie movie={serie} />
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
