import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStudent } from "../services/api"; 

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      <form onSubmit={handleLogin} className="flex flex-col gap-6">
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
    </div>
  );
}
