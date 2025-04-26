export const UserCard = ({ name, userIcon, level, academy, teacher, atendance }) => {
  return (
    <div className="bg-white bg-opacity-90 p-6 text-gray-800 rounded-xl shadow-xl w-[320px] text-center">
      <h1 className="text-xxl font-bold mb-4">Welcome!</h1>
      <img src={userIcon} alt={name} className="w-16 h-16 mx-auto mb-4" />
      <p className="text-xl mb-4"><strong>{name}</strong></p>
      <p className="text-sm"><strong>Level:</strong> {level}</p>
      <p className="text-sm"><strong>Academy:</strong> {academy}</p>
      <p className="text-sm"><strong>Teacher:</strong> {teacher}</p>
      <p className="text-sm"><strong>Group:</strong> {group}</p>
      <p className="text-sm">
        <strong>Atendance:</strong> {atendance ? "Con incidencias" : "Sin incidencias"}
      </p>
    </div>
  );
};
