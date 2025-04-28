import React, { useState } from "react";
import { MenuLayout } from "../layouts/MenuLayout";
import { NotificationList } from "../components/NotificationList";
import { useNotifications } from "../hooks/useNotifications";

export const Notifications = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const studentId = user?.id; // 👈 obtiene correctamente el studentId desde localStorage
  const { notifications, loading, error, refetch } = useNotifications(studentId);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  if (loading) return <p className="text-center text-gray-500">Cargando notificaciones...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const handleDelete = async (id) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(`http://localhost:8080/api/notifications/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error(`Error al eliminar notificación: ${response.status}`);
      }

      await refetch();
      setSubmitError(null);
    } catch (err) {
      setSubmitError(err.message || "Error al eliminar notificación");
      console.error("Error eliminando notificación:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCreate = async () => {
    try {
      setIsSubmitting(true);
      if (!studentId) {
        throw new Error("Usuario no encontrado");
      }

      const response = await fetch(`http://localhost:8080/api/notifications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          content: newContent,
          recipientId: studentId
        })
      });

      if (!response.ok) {
        throw new Error(`Error al crear notificación: ${response.status}`);
      }

      setNewTitle("");
      setNewContent("");
      await refetch();
      setSubmitError(null);
    } catch (err) {
      setSubmitError(err.message || "Error al crear notificación");
      console.error("Error creando notificación:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MenuLayout>
      <div className="bg-white bg-opacity-90 p-2 mb-16 rounded-xl shadow-xl w-[320px]">
        <h2 className="text-xl font-bold text-center text-black font-albert">
          Notificaciones
        </h2>

        {submitError && <p className="text-red-500 text-center mb-2">{submitError}</p>}

        <NotificationList notifications={notifications} onDelete={handleDelete} />
        <div className="mt-2 flex flex-col gap-2 font-albert">
          <input
            type="text"
            placeholder="Título"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border px-3 py-1 rounded text-black"
          />
          <textarea
            placeholder="Contenido"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="border px-3 py-1 rounded text-black"
          />
          <button
            onClick={handleCreate}
            disabled={isSubmitting}
            className={`bg-[#00A1D6] text-white font-albert py-2 rounded font-bold ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
      </div>
    </MenuLayout>
  );
};
