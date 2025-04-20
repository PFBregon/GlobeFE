import React from "react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-4 px-8 flex justify-between items-center z-40">
      <img src="/assets/icons/Bars.svg" alt="Menu" className="h-6 w-6" />
      <img src="/assets/icons/HomeIcon.svg" alt="Home" className="h-6 w-6" />
      <img src="/assets/icons/PhoneCall.svg" alt="Contact" className="h-6 w-6" />
      <img src="/assets/icons/Loupe.svg" alt="Search" className="h-6 w-6" />
    </footer>
  );
};
