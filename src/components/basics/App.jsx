import "./App.css";
import { Header } from "./Header";
import { Slider } from "./Slider";

import { Carousel } from "./Carousel";
import { Image } from "@nextui-org/react";
function App() {
  const images = [
    "https://4kwallpapers.com/images/wallpapers/avatar-the-last-3840x2160-13576.jpg",
    "https://images8.alphacoders.com/133/1335152.jpg",
    "https://wallpapercave.com/wp/wp10578910.jpg",
  ];

  return (
    <>

      <div className="w-full p-0 m-0 bg-primario flex items-center flex-col">
        <div className="md:h-screen">
          <Header />
          <Carousel className="h-[calc(100vh-620px)]" slides={images} />
        </div>
        <div className="w-full justify-start content-start">
          <h1 className="text-4xl text-white m-5 md:m-2">Películas</h1>
          <Slider />
          <h1 className="text-4xl text-white m-5 md:m-2">Series</h1>
          <Slider />
          <h1 className="text-4xl text-white m-5 md:m-2">Anime</h1>
          <Slider />
        </div>
      </div>

    </>
  );
}

export default App;
