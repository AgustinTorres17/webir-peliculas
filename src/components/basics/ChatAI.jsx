import React, { useState } from "react";
import { ChatButton } from "./ChatButton";
import { IoIosCloseCircle } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";
import { Avatar } from "./Avatar";
export const ChatAI = () => {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const showChatHandler = () => {
    setOpacity(opacity === 0 ? 1 : 0);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/recomendations", { state: { prompt: inputValue } });
    }
  };
  return (
    <div className="h-fit w-screen z-50 absolute ">
      <ChatButton showChat={showChatHandler} />
      {opacity > 0 && (
        <div
          style={{ opacity: opacity }}
          className="bg-fondo/95 text-fuente rounded-tl-sm rounded-bl-sm shadow-lg w-screen md:w-[55vw] xl:w-[25vw] h-[80vh] md:h-[50vh] xl:h-[70vh] fixed bottom-0 right-0 transition-all duration-300"
        >
          <div className="flex flex-col justify-between p-2 h-full w-full relative">
            <div className="absolute top-0 h-24 w-full flex justify-end items-start z-[1]">
              <Avatar className="" isChat={true}/>
            </div>
            <div className="flex w-full justify-between z-[2]">
              <h2 className="text-2xl font-bold tracking-wide">
                Asesorate con Chaplin
              </h2>
              <button
                onClick={showChatHandler}
                className="text-2xl font-bold text-fuente hover:text-accent"
              >
                <IoIosCloseCircle />
              </button>
            </div>
            <p className="mt-4 text-lg font-semibold p-2 text-fuente tracking-wide">
              Hola 👋!
              <br />
              Soy Chaplin, la IA de{" "}
              <span className="text-accent font-semibold">QuePinta</span>.{" "}
              <br /> <br /> Mi trabajo es ayudarte a encontrar la película o
              serie que estás buscando! <br /> <br /> Ten en cuenta que mientras
              más preciso (o precisa) seas, mejores serán mis recomendaciones
              para ti! <br /> <br />
              Escribe que te interesa y presiona enter para ver mis
              recomendaciones.
            </p>
            <div className="h-full flex flex-col gap-2 p-2 justify-end">
              <Input
                className="text-fondo-claro"
                placeholder="Cuentame que te gusta..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(event) => handleEnter(event)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
