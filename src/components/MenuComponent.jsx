import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuCard } from "../components/MenuCard";

import Exam from "../assets/icons/exam.svg";
import Messages from "../assets/icons/messages.svg";
import Calendar from "../assets/icons/schedule.svg";
import Photos from "../assets/icons/picture.svg";
import Badge from "../assets/icons/badge.svg";

export const MenuComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-[repeat(2,minmax(150px,1fr))] gap-3 p-3 mb-20">
        <h1 className="text-2xl mb-0 mt-0 font-bold text-center text-black">Menú</h1> <br />
       <MenuCard
        icon={<img src={Messages} alt="Notificationes" className="w-16 h-16" />}
        title="Notificationes"
        onClick={() => navigate("/notifications")}
      />
      
      <MenuCard
        icon={<img src={Exam} alt="Calificaciones" className="w-16 h-16 opacity-20" />}
        title="Próximamente"
        />

      <MenuCard
        icon={<img src={Badge} alt="Logros" className="w-16 h-16 opacity-20" />}
        title="Próximamente"
      />

      <MenuCard
        icon={<img src={Calendar} alt="Calendario" className="w-16 h-16 opacity-20" />}
        title="Próximamente"
      />

      <MenuCard
        icon={<img src={Photos} alt="Fotos" className="w-16 h-16 opacity-20" />}
        title="Próximamente"
      />
    </div>
  );
};