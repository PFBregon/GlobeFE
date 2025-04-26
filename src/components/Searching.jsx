import React, { useState } from "react";

export const Searching = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-40 font-albert">
      <h1 className="text-xl font-bold mt-4 text-black text-center">
        ¿Qué quieres encontrar?
      </h1>

      <div className="relative w-[320px]">
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={handleChange}
          className="w-full pl-4 pr-10 h-12 rounded-xl bg-[#00A1D6] focus:ring-black text-lg text-white placeholder-white"

        />
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-l bg-transparent"
        >
          ×
        </button>
      </div>

      <div className="w-[320px] bg-[#00A1D6] rounded-lg shadow p-4 space-y-2">
        {query ? (
          <>
            <p className="text-black">
              Resultado para: <strong>{query}</strong>
            </p>
            <ul className="list-disc pl-5 text-black">
              <li>"Ejemplo 1"</li>
            </ul>
          </>
        ) : (
          <p className="text-black italic">
            Escribe algo para comenzar la búsqueda...
          </p>
        )}
      </div>
    </div>
  );
};