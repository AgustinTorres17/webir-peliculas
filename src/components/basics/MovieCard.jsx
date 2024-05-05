import React from 'react';
import { Button } from "@/components/ui/button";
import { FaPlusCircle } from "react-icons/fa";

export const MovieCard = ({title, genre, year, imageUrl }) => {
    return (
        <div className="relative w-80 overflow-hidden">
            <img className="h-48 w-80 object-cover transform transition duration-500 ease-in-out hover:scale-110 active:scale-110" src={imageUrl} alt={title} />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col p-6 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-semibold text-white">{title} ({year})</h2>
                <p className="text-sm text-white text-opacity-50">{genre}</p>
                <div className="ml-5px">
                    <Button variant="default">Ver Detalles</Button>
                    <Button variant="favedMovie" className="ml-5"><FaPlusCircle></FaPlusCircle></Button>
                </div>
            </div>
        </div>
    );
};