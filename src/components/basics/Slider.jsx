
import React, { useState, useEffect } from 'react';
import './Slider.css';

export const Slider = () => {

    const scrollContainer = document.querySelector('.scroll-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', handleMouseDown);
scrollContainer.addEventListener('touchstart', handleTouchStart);
scrollContainer.addEventListener('mouseleave', handleMouseLeave);
scrollContainer.addEventListener('mouseup', handleMouseUp);
scrollContainer.addEventListener('touchend', handleTouchEnd);
scrollContainer.addEventListener('mousemove', handleMouseMove);
scrollContainer.addEventListener('touchmove', handleTouchMove);

prevButton.addEventListener('click', handlePrevButtonClick);
nextButton.addEventListener('click', handleNextButtonClick);

function handleMouseDown(e) {
  isDown = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
}

function handleTouchStart(e) {
  const touch = e.touches[0];
  isDown = true;
  startX = touch.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
}

function handleMouseLeave() {
  isDown = false;
}

function handleMouseUp() {
  isDown = false;
}

function handleTouchEnd() {
  isDown = false;
}

function handleMouseMove(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 3; // Ajusta la sensibilidad del desplazamiento
  scrollContainer.scrollLeft = scrollLeft - walk;
}

function handleTouchMove(e) {
  if (!isDown) return;
  e.preventDefault();
  const touch = e.touches[0];
  const x = touch.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 3; // Ajusta la sensibilidad del desplazamiento
  scrollContainer.scrollLeft = scrollLeft - walk;
}

function handlePrevButtonClick() {
  scrollContainer.scrollLeft -= 800; // Ajusta la cantidad de desplazamiento
}

function handleNextButtonClick() {
  scrollContainer.scrollLeft += 800; // Ajusta la cantidad de desplazamiento
}


    return (
        <div className="container-cont">
            <div className="scroll-container cursor-grab select-none">
                <div className="content">
                    <div className="item">
                        <img src="https://www.mubis.es/media/articles/30146/288548/dune-de-denis-villeneuve-anunciada-en-steelbook-uhd-4k-y-blu-ray-original.jpg" alt="Descripción de la imagen 1" />
                        Elemento 1
                    </div>
                    <div className="item">
                        <img src="https://images.alphacoders.com/111/1115513.jpg" alt="Descripción de la imagen 2" />
                        Elemento 2
                    </div>
                    <div className="item">
                        <img src="https://wallpapercave.com/wp/wp7959238.png" alt="Descripción de la imagen 3" />
                        Elemento 3
                    </div>
                    <div className="item">
                        <img src="https://www.mubis.es/media/articles/30146/288548/dune-de-denis-villeneuve-anunciada-en-steelbook-uhd-4k-y-blu-ray-original.jpg" alt="Descripción de la imagen 1" />
                        Elemento 1
                    </div>
                    <div className="item">
                        <img src="https://images.alphacoders.com/111/1115513.jpg" alt="Descripción de la imagen 2" />
                        Elemento 2
                    </div>
                    <div className="item">
                        <img src="https://wallpapercave.com/wp/wp7959238.png" alt="Descripción de la imagen 3" />
                        Elemento 3
                    </div>
                    <div className="item">
                        <img src="https://www.mubis.es/media/articles/30146/288548/dune-de-denis-villeneuve-anunciada-en-steelbook-uhd-4k-y-blu-ray-original.jpg" alt="Descripción de la imagen 1" />
                        Elemento 1
                    </div>
                    <div className="item">
                        <img src="https://images.alphacoders.com/111/1115513.jpg" alt="Descripción de la imagen 2" />
                        Elemento 2
                    </div>
                    <div className="item">
                        <img src="https://wallpapercave.com/wp/wp7959238.png" alt="Descripción de la imagen 3" />
                        Elemento 3
                    </div>
                </div>
            </div>
            <button className="scroll-btn prev">❮</button>
            <button className="scroll-btn next">❯</button>
        </div>
    );
};
