import React, { useState } from "react";
import { ChatButton } from "./ChatButton";
import { IoIosCloseCircle } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
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
          className="bg-fondo/90 text-fuente rounded-tl-sm rounded-bl-sm shadow-lg w-[25vw] h-[50vh] fixed bottom-0 right-0 transition-all duration-300"
        >
          <div className="flex flex-col justify-between p-2 h-full">
            <div className="flex w-full justify-between">
              <h2 className="text-2xl font-bold">Que quieres ver?</h2>
              <button
                onClick={showChatHandler}
                className="text-2xl font-bold text-fuente hover:text-accent"
              >
                <IoIosCloseCircle />
              </button>
            </div>
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
