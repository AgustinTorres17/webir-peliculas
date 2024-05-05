import React from "react";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { SemanalMovie } from "./SemanalMovie";
import { Carousel } from "./Carousel";

import { useEffect, useState } from "react";
export const Home = () => {
  const images = [
    "https://4kwallpapers.com/images/wallpapers/avatar-the-last-3840x2160-13576.jpg",
    "https://images8.alphacoders.com/133/1335152.jpg",
    "https://wallpapercave.com/wp/wp10578910.jpg",
  ];
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!(window.innerWidth > 1023)) {
      setOpacity(1);
    }
  }, []);

  window.addEventListener("scroll", () => {
    // check if is tablet or desktop
    const isTabletOrDesktop = window.innerWidth > 1023;
    const carouselHomeContainer = document.querySelector(
      "#carousel-homepage-container"
    );
    const carouselHome = document.querySelector("#carousel-homepage");

    if (!isTabletOrDesktop) {
      setOpacity(1);
      carouselHome.classList.remove("carousel");
      carouselHomeContainer.classList.remove("carousel-scroll");
      return;
    }

    if (window.scrollY > 10 && isTabletOrDesktop) {
      let newOpacity = window.scrollY / 200;
      if (newOpacity > 1) newOpacity = 1;
      setOpacity(newOpacity);
      if (!carouselHome.classList.contains("carousel") && window.scrollY > 200)
        carouselHome.classList.add("carousel");
      carouselHomeContainer.classList.add("carousel-scroll");
    }
    if (window.scrollY < 10 || !isTabletOrDesktop) {
      carouselHome.classList.remove("carousel");
      carouselHomeContainer.classList.remove("carousel-scroll");
    }
  });
  return (
    <div className="w-full p-0 m-0 bg-fondo flex items-center flex-col">
      <Header />
      <div id="carousel-homepage-container" className="fade-in-anim">
        <Carousel slides={images} />
      </div>
      <div
        id="homepage-main-content"
        className="w-full justify-start content-start md:fade-in-anim z-10"
        style={{ opacity: opacity }}
      >
        <div className="ml-11 mt-10 mb-20 lg:text-4xl text-2xl space-y-5">
          <h1 className=" text-white lg:text-start pr-11 text-center lg:m-5">Películas</h1>
          <Slider
            movies={[
              {
                title: "Avatar: The Way of Water",
                genre: "Accion",
                year: "2022",
                imageUrl:
                  "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg",
              },
              {
                title: "Harry Potter: Las reliquias de la muerte",
                genre: "Fantasia",
                year: "2011",
                imageUrl: "https://wallpapercave.com/wp/wp9267565.jpg",
              },
              {
                title: "Star Wars: Rogue One",
                genre: "Fantasia, Accion, Aventura",
                year: "2016",
                imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dareli8-5d0dc137-a845-40b1-8fdd-02e25118bc41.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGFyZWxpOC01ZDBkYzEzNy1hODQ1LTQwYjEtOGZkZC0wMmUyNTExOGJjNDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AjYvktC6Z-Jtrq7jmcVlWF-JCEJGjbm0u1pcwo4DFVY",
              },
              {
                title: "Dune: Part 1",
                genre: "Fantasia, Accion, Aventura",
                year: "2021",
                imageUrl: "https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature.jpg",
              },
              {
                title: "Dune: Part 2",
                genre: "Fantasia",
                year: "2023",
                imageUrl: "https://arynews.tv/wp-content/uploads/2024/03/dune-franchise.jpg",
              },
              {
                title: "Bataman: El Caballero de la Noche",
                genre: "Acción, Crimen, Drama",
                year: "2008",
                imageUrl: "https://pics.filmaffinity.com/the_dark_knight-451120458-large.jpg",
              },
              {
                title: "El Padrino",
                genre: "Crimen, Drama, Mafia",
                year: "1972",
                imageUrl: "https://w0.peakpx.com/wallpaper/557/513/HD-wallpaper-the-godfather-marlon-brando-vito-corleone.jpg",
              },
              {
                title: "Posesion Infernal: El Despertar",
                genre: "Terror, Suspenso",
                year: "2023",
                imageUrl: "https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2023/10/share-2.jpg?resize=696%2C365&ssl=1",
              },
            ]}
          />
          <h1 className="text-white lg:text-start pr-11 text-center lg:m-5">Series</h1>
          <Slider
            movies={[
              {
                title: "Avatar: The Way of Water",
                genre: "Accion",
                year: "2022",
                imageUrl:
                  "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg",
              },
              {
                title: "Harry Potter: Las Reliquias de la Muerte",
                genre: "Fantasia",
                year: "2011",
                imageUrl: "https://wallpapercave.com/wp/wp9267565.jpg",
              },
              {
                title: "Star Wars: Rogue One",
                genre: "Fantasia, Accion, Aventura",
                year: "2016",
                imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dareli8-5d0dc137-a845-40b1-8fdd-02e25118bc41.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGFyZWxpOC01ZDBkYzEzNy1hODQ1LTQwYjEtOGZkZC0wMmUyNTExOGJjNDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AjYvktC6Z-Jtrq7jmcVlWF-JCEJGjbm0u1pcwo4DFVY",
              },
              {
                title: "Dune: Part 1",
                genre: "Fantasia, Accion, Aventura",
                year: "2021",
                imageUrl: "https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature.jpg",
              },
              {
                title: "Dune: Part 2",
                genre: "Fantasia",
                year: "2023",
                imageUrl: "https://arynews.tv/wp-content/uploads/2024/03/dune-franchise.jpg",
              },
              {
                title: "Bataman: El Caballero de la Noche",
                genre: "Acción, Crimen, Drama",
                year: "2008",
                imageUrl: "https://pics.filmaffinity.com/the_dark_knight-451120458-large.jpg",
              },
              {
                title: "El Padrino",
                genre: "Crimen, Drama, Mafia",
                year: "1972",
                imageUrl: "https://w0.peakpx.com/wallpaper/557/513/HD-wallpaper-the-godfather-marlon-brando-vito-corleone.jpg",
              },
              {
                title: "Posesion Infernal: El Despertar",
                genre: "Terror, Suspenso",
                year: "2023",
                imageUrl: "https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2023/10/share-2.jpg?resize=696%2C365&ssl=1",
              },
            ]}
          />
          
        </div>
        <h1 className=" text-white text-2xl lg:text-4xl lg:text-start text-center lg:m-10 m-3">Recomendacion Semanal</h1>
          <SemanalMovie title="La Sociedad de la Nieve" imageUrl="https://pics.filmaffinity.com/La_sociedad_de_la_nieve-323264210-large.jpg" year="2024" description="Un avión uruguayo en el que viajan los jugadores del equipo de rugby del Old Christians Club de Montevideo se estrella en la cordillera de los Andes y los supervivientes deben sobreponerse a las condiciones extremas para mantenerse vivos." />

      </div>
    </div>
  );
};
