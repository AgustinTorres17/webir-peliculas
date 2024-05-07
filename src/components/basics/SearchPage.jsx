import React, { useState } from 'react';
import { Header } from './Header';
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { ComboboxDemo } from '../ui/combobox';
import "./SearchPage.css";
import { Link } from 'react-router-dom';
import MultiRangeSlider from "multi-range-slider-react";

export const SearchPage = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [showDurationSlider, setShowDurationSlider] = useState(false);
  const [showChapterButtons, setShowChapterButtons] = useState(false);

  const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};

  const handleButtonClick = (buttonName) => {
    const isButtonSelected = selectedButtons.includes(buttonName);
  
    setSelectedButtons(prevSelected => {
      if (isButtonSelected) {
        return prevSelected.filter((btn) => btn !== buttonName);
      } else {
        return [...prevSelected, buttonName];
      }
    });
  
    if (buttonName === "Películas") {
      setShowDurationSlider(true);
    } 

    // Mostrar los botones de cantidad de capítulos si se selecciona "Series" o "Animes"
    if (buttonName === "Series" || buttonName === "Animes") {
      setShowChapterButtons(true);
    } 
    // Ocultar el slider de duración si se deselecciona "Películas"
    if (buttonName === "Películas" && isButtonSelected) {
      setShowDurationSlider(false);
    } 
  
    // Ocultar los botones de cantidad de capítulos si se deselecciona "Series" o "Animes"
    if ((buttonName === "Series" || buttonName === "Animes") && isButtonSelected) {
      if (selectedButtons.includes("Series") && buttonName === "Series" && !selectedButtons.includes("Animes")) {
        setShowChapterButtons(false);
      }
      else if (selectedButtons.includes("Animes") && buttonName === "Animes" && !selectedButtons.includes("Series")) {
        setShowChapterButtons(false);
      }
    } 
  };

  return (
    <div className='card'>
  <div style={{ display: 'flex', justifyContent: 'right' }}>
    <Link
    to="/">
    <Button variant="destructive">
      x
   </Button>
    </Link>
  </div>

      <div>
        <h1 className="text-2xl text-white lg:text-start pr-11 text-center lg:m-5">Tipo</h1>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Películas") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("Películas")}
        >
          Películas
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Series") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("Series")}
        >
          Series
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Animes") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("Animes")}
        >
          Animes
        </Button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <h1 className=" text-2xl text-white lg:text-start pr-11 text-center lg:m-5">Generos</h1>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Accion") ? "selected" : ""}` } 
          onClick={() => handleButtonClick("Accion")}
        >
          Accion
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Drama") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("Drama")}
        >
          Drama
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Suspenso") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("Suspenso")}
        >
          Suspenso
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Comedia") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("Comedia")}
        >
          Comedia
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Infantil") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("Infantil")}
        >
          Infantil
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Familiar") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("Familiar")}
        >
          Familiar
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Terror") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("Terror")}
        >
          Terror
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("Documental") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("Documental")}
        >
          Documental
          </Button>
      </div>
        <div style={{ marginTop: '1rem' }}>
            <h1 className="text-2xl text-white lg:text-start pr-11 text-center lg:m-5">Rango de año de estreno</h1>
            <MultiRangeSlider
			    min={1950}
            max={2024}
            step={5}
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
              handleInput(e);
            }}
          />
          </div>
        {showDurationSlider && (
          <div style={{ marginTop: '1rem' }}>
            <h1 className="text-2xl text-white lg:text-start pr-11 text-center lg:m-5">Rango de duración de película</h1>
            <MultiRangeSlider
			    min={0}
            max={300}
            step={5}
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
              handleInput(e);
            }}
          />
          </div>
        )}
        {showChapterButtons && (
        <div style={{ marginTop: '1rem' }}>
        <h1 className="text-white lg:text-start pr-11 text-center lg:m-5">Cantidad de capítulos</h1>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("1-8") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("1-8")}
        >
          1-8
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("8-40") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("8-40")}
        >
          8-40
        </Button>
        <Button 
          variant="secondary" 
          className={`mr-4 ${selectedButtons.includes("40 +") ? "selected" : ""}`} 
          onClick={() => handleButtonClick("40 +")}
        >
          40 +
        </Button>
      </div>
        )}
      <div style={{ marginTop: '1rem' }}>
        <h1 className="text-2xl text-white lg:text-start pr-11 text-center lg:m-5">Actores</h1>
        <ComboboxDemo variant="default" ></ComboboxDemo>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <h1 className="text-2xl text-white lg:text-start pr-11 text-center lg:m-5">Títulos Similares</h1>
        <ComboboxDemo variant="default" >Títulos</ComboboxDemo>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="Search" >
        Buscar
      </Button>
      </div>
    </div>
  )
}

