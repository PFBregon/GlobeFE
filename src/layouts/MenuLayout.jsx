import React from "react";
import Salida from "../assets/Salida.svg";
import { Footer } from "../components/Footer";

export const MenuLayout = ({ children }) => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-between overflow-hidden">

      <div className="relative flex-1">
        <img
          src={Salida}
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 flex justify-center items-center h-full">
          {children}
        </div>

      </div>
      <Footer />
    </div>
  );
};
