import React from 'react'
import { Header } from './Header';
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { ComboboxDemo } from '../ui/combobox';
import "./SearchPage.css";

export const SearchPage = () => {

  return (
    <div>
      <div>
        <h1 className="text-white lg:text-start pr-11 text-center lg:m-5">Tipo</h1>
        <Button variant="secondary" className="mr-4">Películas</Button>
        <Button variant="secondary" className="mr-4">Series</Button>
        <Button variant="secondary" className="mr-4">Animes</Button>
      </div>
      <div>
        <h1 className="text-white lg:text-start pr-11 text-center lg:m-5">Generos</h1>
        <Button variant="secondary" className="mr-4">Accion</Button>
        <Button variant="secondary" className="mr-4">Drama</Button>
        <Button variant="secondary" className="mr-4">Suspenso</Button>
        <Button variant="secondary" className="mr-4">Comedia</Button>
        <Button variant="secondary" className="mr-4">Infantil</Button>
        <Button variant="secondary" className="mr-4">Familiar</Button>
        <Button variant="secondary" className="mr-4">Terror</Button>
        <Button variant="secondary" className="mr-4">Documental</Button>
      </div>
      <div>
        <h1 className="text-white lg:text-start pr-11 text-center lg:m-5">Rango de años de estreno</h1>
        <Slider variant="default" >Años</Slider>
      </div>
      <div>
        <h1 className="text-white lg:text-start pr-11 text-center lg:m-5">Rango de duración de película</h1>
        <Slider variant="default" >Años</Slider>
      </div>
      <div>
        <h1 className="text-white lg:text-start pr-11 text-center lg:m-5">Cantidad de capítulos</h1>
        <Button variant="secondary" className="mr-4">1-8</Button>
        <Button variant="secondary" className="mr-4">8-40</Button>
        <Button variant="secondary" className="mr-4">40 +</Button>
      </div>
      <div>
        <h1 className="text-white lg:text-start pr-11 text-center lg:m-5">Actores</h1>
        <ComboboxDemo variant="default" ></ComboboxDemo>
      </div>
      <div>
        <h1 className="text-white lg:text-start pr-11 text-center lg:m-5">Títulos Similares</h1>
        <ComboboxDemo variant="default" >Títulos</ComboboxDemo>
      </div>
    </div>
  )
}
