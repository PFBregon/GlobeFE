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
    <div className="flex flex-col gap-4 w-[340px] overflow-y-auto p-2 font-albert">
      {notifications.map((note) => (
        <div
        key={note.id}
        className="relative bg-[#00A1D6] text-white rounded-xl px-4 py-4 shadow-md w-full flex justify-between items-start"
      >
          <p className="text-sm font-bold">{note.title}</p> 
          <p className="text-sm">{note.content}</p>
          <button
            onClick={() => onDelete(note.id)}
            className="text-red-500 hover:text-red-700 text-sm ml-2"
              title="Eliminar notificación"
            >
              🗑️ </button>
          <span className="text-[10px] text-gray-600 block text-right mt-1">
            {note.sentAt?.substring(0, 10)}
          </span>

    
        </div>
      ))}
    </div>
  );
};
