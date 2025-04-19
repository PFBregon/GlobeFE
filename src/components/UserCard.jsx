export const UserCard = ({ name, photoUrl, level, academy, teacher, atendance }) => {
    return (
      <div className="user-card">
        <div className="card-background">
          <img src={photoUrl} alt={name} className="profile-img" />
          <h2>{name}</h2>
          <p>Nivel: {level}</p>
          <p>Academia: {academy}</p>
          <p>Profesor/a: {teacher}</p>
          <p>Asistencia: {atendance ? "Con incidencias" : "Sin incidencias"}</p>

        </div>
      </div>
    );
  }
  