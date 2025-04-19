const API_BASE = "http://localhost:8080/api";

export async function getNotifications() {
  const response = await fetch(`${API_BASE}/notifications`);
  if (!response.ok) throw new Error("Error al obtener notificaciones");
  return response.json();
}
