export const UserCard = ({ name, userIcon, level, academy, teacher, attendance, group }) => {
  return (
    <div className="bg-white bg-opacity-90 p-6 text-black rounded-xl shadow-xl w-[320px] text-center font-albert">
      <h1 className="text-xxl font-bold mb-4">Welcome!</h1>
      <img src={userIcon} alt={name} className="w-16 h-16 mx-auto mb-4" />
      <p className="text-xl mb-4"><strong>{name}</strong></p>
      <p className="text-sm"><strong>Level:</strong> {level}</p>
      <p className="text-sm"><strong>Academy:</strong> {academy ?? "Sin academia"}</p>
      <p className="text-sm"><strong>Teacher:</strong> {teacher ?? "Sin profesor"}</p>
      <p className="text-sm"><strong>Group:</strong> {group ?? "Sin grupo"}</p>
      <p className="text-sm"><strong>Attendance:</strong> {attendance ? "Con incidencias" : "Sin incidencias"}
      </p>
    </div>
  );
};
