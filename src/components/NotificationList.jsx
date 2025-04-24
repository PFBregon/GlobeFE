import React from "react";

export const NotificationList = ({ notifications }) => {
  if (!notifications || notifications.length === 0) {
    return (
      <p className="text-gray-500 italic text-center mt-4">
        No tienes notificaciones todavía.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-[340] overflow-y-auto p-2">
      {notifications.map((note) => (
        <div
          key={note.id}
          className="self-start bg-[#DCF8C6] text-black rounded-xl px-4 py-2 shadow max-w-[75%]"
        >
          <p className="text-sm">{note.message}</p>
          <span className="text-[10px] text-gray-600 block text-right mt-1">
            {note.date}
          </span>
        </div>
      ))}
    </div>
  );
};
