export const getNotifications = async () => {
  const response = await fetch('http://localhost:8080/api/notifications');
  if (!response.ok) {
    throw new Error('Error al obtener las notificaciones');
  }
  return await response.json();
};

export const loginStudent = async (username, password) => {
  const response = await fetch("http://localhost:8080/api/students/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas");
  }

  return await response.json();
};

