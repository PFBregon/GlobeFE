import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStudent } from "../services/api"; 
import infoIcon from "../assets/icons/InformationButton.svg"; 

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = await loginStudent(username, password);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/UserProfile"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative bg-white p-8 rounded-xl shadow-xl w-[350px] mx-auto mt-10">
      <form onSubmit={handleLogin} className="flex flex-col gap-6 mb-10">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <button type="submit" className="bg-[#00A1D6] text-white py-2 rounded">
          Iniciar sesión
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
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
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-m"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-2">Información</h2>
            <p className="text-sm text-gray-700">
              Este usuario y contraseña están facilitados por Globe School. Si necesita cambiar su información de acceso, pongase en contacto con Globe School. <br /> 
              ©2025 Nubaria - Todos los derechos reservados.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
