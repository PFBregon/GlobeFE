import React, { useEffect, useState } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/students')
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error al obtener estudiantes:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} {student.surname} - Grupo: {student.groupName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
