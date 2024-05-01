import React from "react";
import "./App.css";
import "./Header.css";
import { RiMovie2Fill } from "react-icons/ri";
import { FaSearch, FaHome, FaSearchPlus } from "react-icons/fa";
import { Input } from "@nextui-org/react";
import { FaList } from "react-icons/fa6";
export const Header = () => {
  return (
   
    <div className="w-full bg-fondo py-2 flex items-center px-2 md:px-12 justify-between sticky top-0 z-50">
      <div className="flex items-center md:gap-1 md:text-xl text-lg font-bold text-accent">
        <RiMovie2Fill />
        <span>QuePinta</span>
      </div>
      <div className="w-full items-center text-fuente gap-5 bg-primario/80 flex justify-center text-xl fixed bottom-0 left-0 right-0 py-3 z-50 animated-opacity sm:static sm:bg-transparent">
        <a className="hover:text-accent transition-all ease-in no-underline text-fuente" href="">
        <FaHome className="sm:hidden"/>
        <span className="text-sm text-accent hidden sm:block">Inicio</span>
        </a>
        <a className="hover:text-accent transition-all ease-in no-underline text-fuente" href="">
        <FaList className="sm:hidden"/>
        <span className="text-sm text-accent hidden sm:block">Mi Lista</span>
        </a>
        <a className="hover:text-accent transition-all ease-in no-underline text-fuente" href="">
        <FaSearchPlus className="sm:hidden"/>
        <span className="text-sm text-accent hidden sm:block">Busqueda Avanzada</span>
        </a>
      </div>
      <div className="flex items-center max-w-48">
        <Input
          type="text"
          placeholder="Busca tu pelicula favorita"
          labelPlacement="outside"
          endContent={<FaSearch className="" />}
          classNames={{
            input: "bg-transparent text-fuente ",
            innerWrapper: "bg-transparent text-fuente hover:text-primario focus-within:text-primario",
            inputWrapper: [
              "shadow-xl",
              "bg-primario",
              "text-fuente",
              "hover:text-accent",
            ],
            placeholder: "text-fuente",
          }}
          
        />
      </div>
    </div>
  
  );
};
