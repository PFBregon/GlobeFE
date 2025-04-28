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

        <div
          style={{
            position: "absolute",
            top: "45%", 
            left: "50%", 
            transform: "translate(-50%, -50%)", 
            zIndex: 20,
            width: "350px", 
            height: "500px", 
            borderRadius: "16px", 
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)", 
            overflow: "hidden", 
            backgroundColor: "rgba(255, 255, 255)",
            opacity: 0.9,
          }}>
        </div>

        <div className="relative z-30 flex justify-center items-center h-full">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};