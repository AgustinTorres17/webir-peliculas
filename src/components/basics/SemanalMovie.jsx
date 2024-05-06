import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import "./SemanalMovie.css";


export const SemanalMovie = ({ title, genre, year, imageUrl, description }) => {
    return (
        
        <div className='px-2  pt-3 lg:flex lg:space-x-20 md:flex md:flex-col md:items-center lg:items-start lg:flex-row md:space-y-5 text-center lg:text-start' >
            <div className="fotoSemanal">
                <img className='w-full h-full object-cover' src={imageUrl} alt={title} />
            </div>
            <div className="Info space-y-4">
                <h2 className='lg:text-4xl text-2xl font-semibold text-accent'>{title} ({year})</h2>
                <p className='mt-2 lg:text-xl text-white text-pretty'>{genre}</p>
                <p className='text-white text-xl lg:text-2xl'>{description}</p>
                <Button variant="default" className="boton">Ver Detalles</Button>
                <Button variant="favedMovie" className="ml-5 boton2"><FaPlusCircle /></Button>
            </div>
        </div>
    );
};