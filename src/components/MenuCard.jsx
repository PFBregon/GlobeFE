import React from "react";

export const MenuCard = ({ icon, title, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-full flex flex-col items-center justify-center bg-[#00A1D6] text-white rounded-lg shadow-md p-3 hover:bg-[#578be6] transition duration-300 ${className}`} >

      <div className="w-18 h-20">{icon}</div>
      <p className="text-center font-bold">{title}</p>

    </button>
  );
};