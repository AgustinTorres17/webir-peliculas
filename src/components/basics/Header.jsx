import React from "react";
import "./App.css";
import "./Header.css";
import { RiMovie2Fill } from "react-icons/ri";
import { FaSearch, FaHome, FaSearchPlus } from "react-icons/fa";
import { Input } from "@nextui-org/react";
import {useState, useEffect} from "react";
import { FaList } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
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
   
    <div className="header-blur w-full bg-fondo h-14 py-2 flex items-center px-2 md:px-12 justify-between sticky top-0 z-50" style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
      <div className="flex items-center md:gap-1 md:text-xl text-lg font-bold text-accent">
        <RiMovie2Fill />
        <span>QuePinta</span>
      </div>
      <div className="w-full items-center text-fuente gap-5 bg-primario/80 flex justify-center text-xl fixed bottom-0 left-0 right-0 py-3 z-50 animated-opacity sm:static sm:bg-transparent">
        <a className="hover:text-accent transition-all ease-in no-underline text-fuente" href="">
        <FaHome className="sm:hidden"/>
        <span className="text-sm text-fuente hover:text-accent hidden sm:block">Inicio</span>
        </a>
        <a className="hover:text-accent  transition-all ease-in no-underline text-fuente" href="">
        <FaList className="sm:hidden"/>
        <span className="text-sm text-fuente hover:text-accent hidden sm:block">Mi Lista</span>
        </a>
        <a className="hover:text-accent transition-all ease-in no-underline text-fuente" href="">
        <FaSearchPlus className="sm:hidden"/>
        <span className="text-sm text-fuente hover:text-accent hidden sm:block">Busqueda Avanzada</span>
        </a>
        <Button variant="">Hola</Button>
      </div>
      <div className="flex items-center max-w-72 min-w-44 lg:min-w-56">

      </div>
    </div>
  
  );
};
