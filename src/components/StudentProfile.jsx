import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StudentProfile() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }

    fetch("http://localhost:8080/api/students/1")
      .then(res => res.json())
      .then(data => setStudent(data));
  }, []);

    if (!student) {
        return <div>Loading...</div>;
    }
  return (
    <UserCard
        name={`${student.name} ${student.surname}`}
        photoUrl="/images/lucia.png"
        level={student.level}
        academy={student.academy.name}
        teacher={student.teacher.name}
        atendance={student.hasAttendanceIssues}
        />
  );
}