import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SendButton } from "../components/SendButton";
import infoIcon from "../assets/icons/InformationButton.svg";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "lucia" && password === "1234") {
      localStorage.setItem("user", username);
      navigate("/UserProfile");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="relative bg-white bg-opacity-90 p-10 rounded-xl shadow-xl w-[350px] mx-auto">
      <form onSubmit={handleLogin} className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-gray-700 text-base leading-tight opacity-90">Usuario</label>
          <input
            type="text"
            placeholder="Inserte nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#00a1d6]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-700 text-base leading-tight opacity-90">Contraseña</label>
          <input
            type="password"
            placeholder="Inserte aquí su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#00a1d6]"
          />
        </div>

        <div className="flex justify-center">
          <SendButton type="submit" />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </form>


      <div
        className="absolute bottom-4 right-4 cursor-pointer"
        onClick={() => setShowModal(true)} >
        <img src={infoIcon} alt="info" className="h-6 w-6" />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[300px] text-center relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-2">Información</h2>
            <p className="text-sm text-gray-700">
              Usuario y contraseña están facilitados por Globe School. Si necesita cambiar su información de acceso, pongase en contacto con Globe School.  
              ©2025 Nubaria - Todos los derechos reservados.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}