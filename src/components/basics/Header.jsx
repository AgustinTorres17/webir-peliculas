import React from "react";
import "../App.css";
import "./Header.css";
import { RiMovie2Fill } from "react-icons/ri";
import { FaHome, FaSearchPlus, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaList } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const Header = () => {
  const [opacity, setOpacity] = useState(1);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Clear the timeout if the user scrolls
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Reset the opacity
      const header = document.querySelector(".header-mobile");
      header.style.opacity = 1;

      // Set a new timeout
      const timeout = setTimeout(() => {
        header.style.opacity = 0;
      }, 5000); // 5 seconds

      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  return (
    <div
      className="header-blur w-full bg-fondo h-14 py-2 flex items-center gap-5 px-2 md:px-12 justify-between sticky top-0 z-50"
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
    >
      <Link to="/">
        <div className="flex items-center md:gap-1 md:text-xl text-lg font-bold text-accent">
          <RiMovie2Fill />
          <span>QuePinta</span>
        </div>
      </Link>
      <div className="w-full  items-center text-fuente gap-5  flex justify-center text-xl  py-3 z-50 animated-opacity sm:static sm:bg-transparent">
        <Link
          to="/"
          className="hover:text-accent transition-all ease-in no-underline text-fuente"
          href=""
        >
          <span className="text-base text-fuente hover:text-accent hidden sm:block">
            Inicio
          </span>
        </Link>
        <Link
          to="/mi-lista"
          className="hover:text-accent  transition-all ease-in no-underline text-fuente"
        >
          <span className="text-base text-fuente hover:text-accent hidden sm:block">
            Mi Lista
          </span>
        </Link>
        <Link
          to="/search"
          className="hover:text-accent transition-all ease-in no-underline text-fuente"
          href=""
        >
          <span className="text-base text-fuente hover:text-accent hidden sm:block">
            Busqueda Avanzada
          </span>
        </Link>
      </div>
      <div className="sm:hidden fixed bottom-0 left-0 right-0 flex py-3 justify-center gap-5 text-xl w-full bg-fondo/70 text-fuente backdrop-blur-sm header-mobile transition-opacity duration-300 opacity-0">
        <Link to="/">
          <FaHome className="sm:hidden" />
        </Link>
        <Link
          to="/mi-lista"
          className="hover:text-accent  transition-all ease-in no-underline text-fuente"
        >
          <FaList className="sm:hidden" />
        </Link>
        <Link
          to="/search"
          className="hover:text-accent transition-all ease-in no-underline text-fuente"
          href=""
        >
          <FaSearchPlus className="sm:hidden" />
        </Link>
      </div>
      <div className="flex gap-2">
        <Input placeholder="Buscar" className="w-28" />
        <Button variant="default">
          <FaSearch />
        </Button>
      </div>
    </div>
  );
};
