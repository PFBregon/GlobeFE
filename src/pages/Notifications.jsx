import React, { useEffect, useState } from "react";
import { MenuLayout } from "../layouts/MenuLayout";
import { NotificationList } from "../components/NotificationList";

export const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/notifications")
      .then(res => res.json())
      .then(data => setNotifications(data))
      .catch(error => console.error("Error al traer notificaciones:", error));
  }, []);

  return (
    <MenuLayout>
      <div className="bg-white bg-opacity-90 p-4 rounded-xl shadow-xl w-[350px] mx-auto">
        <h2 className="text-xl font-bold text-center text-black">
          Notificaciones
        </h2>
        <NotificationList notifications={notifications} />
      </div>
    </MenuLayout>
  );
};
