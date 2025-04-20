import { Link } from "react-router-dom";
import Index from "../assets/Index.png";
import { Button } from "../components/InitButton.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full">
      <img className="index w-full h-auto" alt="Index" src={Index} />
      <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2">
        <Button onClick={() => navigate("/login")}/>
      </div>
    </div>
  );
};