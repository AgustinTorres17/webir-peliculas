import React, { useState } from "react";
import { ChatButton } from "./ChatButton";
import { IoIosCloseCircle } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";
import { Avatar } from "./Avatar";

export const ChatAI = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const showChatHandler = () => {
    setIsVisible(!isVisible);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/recomendations", { state: { prompt: inputValue } });
    }
  };

  return (
    <div className="h-fit w-screen z-50 absolute">
      <ChatButton showChat={showChatHandler} />
      <div
        className={`bg-fondo/95 text-fuente rounded-tl-sm rounded-bl-sm shadow-lg max-w-full md:max-w-[40vw] h-auto min-h-[40vh] fixed bottom-0 right-0 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-between gap-5 p-2 h-full w-full relative">
          <div className="absolute top-0 h-24 w-full flex justify-end items-start z-[1]">
            <Avatar className="" isChat={true} />
          </div>
          <div className="flex w-full justify-between z-[2]">
            <h2 className="text-lg md:text-2xl font-bold tracking-wide">
              Asesorate con Chatplin
            </h2>
            <button
              onClick={showChatHandler}
              className="text-lg md:text-2xl font-bold text-fuente hover:text-accent"
            >
              <IoIosCloseCircle />
            </button>
          </div>
          <p className="text-sm md:text-md font-semibold p-2 text-fuente tracking-tight leading-4">
            Hola 👋!
            <br />
            Soy Chatplin, la IA de{" "}
            <span className="text-accent font-semibold">QuePinta</span>.
            <br /> <br /> Mi trabajo es ayudarte a encontrar la película o serie
            que estás buscando! <br /> <br /> Ten en cuenta que mientras más
            preciso (o precisa) seas, mejores serán mis recomendaciones para
            ti! <br /> <br />
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
    </div>
  );
};
