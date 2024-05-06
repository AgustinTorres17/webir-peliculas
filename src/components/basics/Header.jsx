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
  useEffect(() => {
    const handleScroll = () => {
      let opacity = 1 - window.scrollY / 300;
      if (opacity < 0.25) opacity = 0.25;
      setOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  
  return (
    <div
      className="header-blur w-full bg-fondo h-14 py-2 flex items-center px-2 md:px-12 justify-between sticky top-0 z-50"
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
    >
      <div className="flex items-center md:gap-1 md:text-xl text-lg font-bold text-accent">
        <RiMovie2Fill />
        <span>QuePinta</span>
      </div>
      <div className="w-full  items-center text-fuente gap-5 bg-primario/80 flex justify-center text-xl fixed bottom-0 left-0 right-0 py-3 z-50 animated-opacity sm:static sm:bg-transparent">
        
          <Link
            to="/"
            className="hover:text-accent transition-all ease-in no-underline text-fuente"
            href=""
          >
            <FaHome className="sm:hidden" />
            <span className="text-base text-fuente hover:text-accent hidden sm:block">
              Inicio
            </span>
          </Link>
          <Link
            to="/mi-lista"
            className="hover:text-accent  transition-all ease-in no-underline text-fuente"
          >
            <FaList className="sm:hidden" />
            <span className="text-base text-fuente hover:text-accent hidden sm:block">
              Mi Lista
            </span>
          </Link>
          <Link
            to="/search"
            className="hover:text-accent transition-all ease-in no-underline text-fuente"
            href=""
          >
            <FaSearchPlus className="sm:hidden" />
            <span className="text-base text-fuente hover:text-accent hidden sm:block">
              Busqueda Avanzada
            </span>
          </Link>
      </div>
      <div className="flex gap-2">
        <Input />
        <Button variant="default">
          <FaSearch />
        </Button>
      </div>
    </div>
  );
};
