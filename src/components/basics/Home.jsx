import React from "react";
import { Header } from "./Header";
import { Slider } from "./Slider";

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
        <h1 className="text-4xl text-white m-5 md:m-2">Películas</h1>
        <Slider />
        <h1 className="text-4xl text-white m-5 md:m-2">Series</h1>
        <Slider />
        <h1 className="text-4xl text-white m-5 md:m-2">Anime</h1>
        <Slider />
      </div>
    </div>
  );
};
