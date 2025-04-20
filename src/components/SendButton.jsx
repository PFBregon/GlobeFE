import React from "react";
import "../assets/Index.png";

export const SendButton = ({ onClick, type = "button" }) => {
    return (
        <button
        type={type}
        onClick={onClick}
         className="SendButton bg-[#00a1d6] rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-[54px] w-[198px] relative text-white font-albert-sans font-bold text-[32px] flex items-center justify-center" >
        Enviar
      </button>
    );
    };
  