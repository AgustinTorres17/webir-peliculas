import React from "react";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import { Button } from "@nextui-org/react";


const ReactImg = 'https://www.mubis.es/media/articles/30146/288548/dune-de-denis-villeneuve-anunciada-en-steelbook-uhd-4k-y-blu-ray-original.jpg';
const VueImg = 'https://images.alphacoders.com/111/1115513.jpg';
const AngularImg = 'https://wallpapercave.com/wp/wp7959238.png';

export const Carousel = () => {
    return (

        <CCarousel controls indicators>
    <CCarouselItem>
        <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
        <div className="carousel-caption">
            <h3>Texto del Slide 1</h3>
            <p>Descripción del Slide 1</p>
            <Button>Ver más</Button>
        </div>
    </CCarouselItem>
    <CCarouselItem>
        <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
        <div className="carousel-caption">
            <h3>Texto del Slide 2</h3>
            <p>Descripción del Slide 2</p>
            <Button>Ver más</Button>
        </div>
    </CCarouselItem>
    <CCarouselItem>
        <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
        <div className="carousel-caption">
            <h3>Texto del Slide 3</h3>
            <p>Descripción del Slide 3</p>
            <Button>Ver más</Button>
        </div>
    </CCarouselItem>
</CCarousel>


    );
};
