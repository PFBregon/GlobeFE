import { Footer } from "../components/Footer";
import Salida from "../assets/Salida.svg";

export const UserProfile = () => {
  return (
    <div className="relative w-full h-full">
      <img className="w-full h-auto" alt="Menu" src={Salida} />
          <div className="absolute bottom-[200px] left-1/2 transform -translate-x-1/2"></div>
      <Footer />
    </div>
  );
};
