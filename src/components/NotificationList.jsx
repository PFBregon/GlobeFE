import React from "react";

export const NotificationList = ({ notifications, onDelete }) => {
  if (!notifications || notifications.length === 0) {
    return (
      <p className="text-gray-500 italic text-center font-albert mt-4">
        No tienes notificaciones todavía.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-[310px] overflow-y-auto p-2 font-albert">
      {notifications.map((note) => (
        <div
          key={note.id}
          className="bg-[#00A1D6] text-white rounded-xl px-4 py-2 shadow-md w-full flex flex-col justify-between"
        >

          <p className="text-sm font-bold font-albert mb-2">{note.title}</p>
          <p className="text-sm font-albert mb-2">{note.content}</p>

          <button
            onClick={() => onDelete(note.id)}
            className="self-end text-red-500 hover:text-red-700 text-sm mb-1"
            title="Eliminar notificación"
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
};
