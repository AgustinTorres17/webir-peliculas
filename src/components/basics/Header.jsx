import React from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Input } from "@nextui-org/react";
export const Header = () => {
  return (
    <div className="w-full bg-fondo py-2 flex items-center justify-between px-5">
      <div className="flex items-center gap-1 text-xl font-bold text-accent">
        <RiMovie2Fill />
        <span>QuePinta</span>
      </div>
      <div className="flex items-center text-fuente gap-5">
        <a className="hover:text-accent transition-all ease-in" href="">
          Home
        </a>
        <a className="hover:text-accent transition-all ease-in" href="">
          Mi Lista
        </a>
        <a className="hover:text-accent transition-all ease-in" href="">
          Busqueda Personalizada
        </a>
      </div>
      <div className="flex items-center">
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
