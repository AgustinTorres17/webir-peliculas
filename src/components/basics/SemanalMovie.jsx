import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import "./SemanalMovie.css";


export const SemanalMovie = ({ title, genre, year, imageUrl, description }) => {
    return (
        <div className='lg:ml-20 lg:mr-20 p-10 bg-black bg-opacity-50  lg:flex lg:space-x-20 md:grid md:space-y-5' >
            <div className="fotoSemanal">
                <img className='w-full h-full object-cover ' src={imageUrl} alt={title} />
            </div>
            <div class="Info space-y-10">
                <h2 className='lg:text-4xl text-2xl font-semibold text-white'>{title} ({year})</h2>
                <p className='mt-2 lg:text-xl text-white'>{genre}</p>
                <p className='text-white text-xl lg:text-2xl'>{description}</p>
                <Button variant="default" className="boton">Ver Detalles</Button>
                <Button variant="favedMovie" className="ml-5 boton2"><FaPlusCircle /></Button>
            </div>
        </div>
    );
};