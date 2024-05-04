import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Carousel.css";


export const Carousel = ({ slides }) => {
  const [curr, setCurr] = useState(0);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    setOffsetX((clientX - startX) * 10); // Multiply offsetX by 2
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (offsetX > 800) {
      prev();
    } else if (offsetX < -800) {
      next();
    }
    setOffsetX(0);
  };

  return (
    <div
      id="carousel-homepage"
      className="overflow-hidden relative md:min-h-full cursor-grab"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div
        className="relative flex transition-transform duration-500 ease-in-out h-72 lg:h-[calc(100vh-56px)]"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(calc(-${
            (curr * 100) / slides.length
          }% + ${offsetX}px))`,
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt="slide"
            className="overflow-hidden w-screen object-cover object-center fade-bottom"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full shadow opacity-100 bg-fuente p-4 hover:bg-primary hover:text-accent transition-all ease-in-out duration-300 top-1/2 left-4 transform -translate-y-1/2"
          color="secondary"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          className="rounded-full shadow opacity-100 bg-fuente p-4 hover:bg-primary hover:text-accent transition-all ease-in-out duration-300 top-1/2 right-4 transform -translate-y-1/2"
          color="secondary"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
