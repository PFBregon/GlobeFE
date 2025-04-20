import React from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/icons/Bars.svg";
import Home from "../assets/icons/HomeIcon.svg";
import Contact from "../assets/icons/PhoneCall.svg";
import Search from "../assets/icons/Loupe.svg";

export const Footer = () => {
  return (
    <footer className="h-16 bg-white shadow-inner border-t border-gray-200 py-4 px-8 flex justify-between items-center z-20">
      <Link to="/Menu">
        <img src={Menu} alt="Menu" className="h-6 w-6" />
      </Link>
      <Link to="/UserProfile">
        <img src={Home} alt="Home" className="h-6 w-6" />
      </Link>
      <Link to="/Contact">
        <img src={Contact} alt="Contact" className="h-6 w-6" />
      </Link>
      <Link to="/Search">
        <img src={Search} alt="Search" className="h-6 w-6" />
      </Link>
    </footer>
  );
};