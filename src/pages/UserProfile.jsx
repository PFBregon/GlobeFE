import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Salida from "../assets/Salida.svg";
import { UserCard } from "../components/UserCard";
import userIcon from "../assets/icons/User.svg";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/Login");
      return;
    }

    const studentData = JSON.parse(user);
    console.log("Datos completos desde backend:", studentData);
    setStudent(studentData);
  }, [navigate]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-screen flex flex-col justify-between overflow-hidden">
      <div className="relative flex-1">
        <img
          src={Salida}
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 flex justify-center items-center h-full">
          <UserCard
            name={`${student.name} ${student.surname}`}
            userIcon={userIcon}
            level={student.level ?? "Nivel no disponible"}
            academy={student.academyName ?? "Sin academia"}
            teacher={student.teacherName ?? "Sin profesor"}
            group={student.groupName ?? "Sin grupo"}
            attendance={student.hasAttendanceIssues}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
