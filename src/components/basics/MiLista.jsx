import React from 'react';
import { Header } from './Header';
import { MovieCard } from './MovieCard';

export const MiLista = ({}) => {
    const movies = [
       {
         title: "Avatar: The Way of Water",
         genre: "Accion",
         year: "2022",
         imageUrl:
           "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg",
       },
       {
         title: "Harry Potter: Las reliquias de la muerte",
         genre: "Fantasia",
         year: "2011",
         imageUrl: "https://wallpapercave.com/wp/wp9267565.jpg",
       },
       {
         title: "Star Wars: Rogue One",
         genre: "Fantasia, Accion, Aventura",
         year: "2016",
         imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dareli8-5d0dc137-a845-40b1-8fdd-02e25118bc41.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGFyZWxpOC01ZDBkYzEzNy1hODQ1LTQwYjEtOGZkZC0wMmUyNTExOGJjNDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AjYvktC6Z-Jtrq7jmcVlWF-JCEJGjbm0u1pcwo4DFVY",
       },
       {
         title: "Dune: Part 1",
         genre: "Fantasia, Accion, Aventura",
         year: "2021",
         imageUrl: "https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature.jpg",
       },
       {
         title: "Dune: Part 2",
         genre: "Fantasia",
         year: "2023",
         imageUrl: "https://arynews.tv/wp-content/uploads/2024/03/dune-franchise.jpg",
       },
       {
         title: "Bataman: El Caballero de la Noche",
         genre: "Acción, Crimen, Drama",
         year: "2008",
         imageUrl: "https://pics.filmaffinity.com/the_dark_knight-451120458-large.jpg",
       },
       {
         title: "El Padrino",
         genre: "Crimen, Drama, Mafia",
         year: "1972",
         imageUrl: "https://w0.peakpx.com/wallpaper/557/513/HD-wallpaper-the-godfather-marlon-brando-vito-corleone.jpg",
       },
       {
         title: "Posesion Infernal: El Despertar",
         genre: "Terror, Suspenso",
         year: "2023",
         imageUrl: "https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2023/10/share-2.jpg?resize=696%2C365&ssl=1",
       }
     ];
   
       return (
           <div className='text-center'>
               <Header />
               <h1 className="text-white text-4xl lg:text-center lg:m-5">Mi Lista</h1>
               <div class="grid lg:grid-cols-5 lg:grid-rows-10 lg:p-15 gap-10 ml-11 ">
                   {movies.map((movie, index) => (
                       <MovieCard key={index} title={movie.title} genre={movie.genre} year={movie.year} imageUrl={movie.imageUrl} />
                   ))}
               </div>
           </div>
       );
   };