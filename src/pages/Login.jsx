import { Link } from "react-router-dom";
import Index from "../assets/Index.png";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <div className="relative w-full h-full">
      <img className="index w-full h-auto" alt="Index" src={Index} />
      <div className="absolute bottom-[200px] left-1/2 transform -translate-x-1/2">
        <LoginForm />
      </div>
    </div>
  );
};