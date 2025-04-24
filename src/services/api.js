export const getNotifications = async () => {
  const response = await fetch('http://localhost:8080/api/notifications');
  if (!response.ok) {
    throw new Error('Error al obtener las notificaciones');
  }
  return await response.json();
};
