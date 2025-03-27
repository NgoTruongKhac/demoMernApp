import axios from "axios";
import { useEffect, useState } from "react";

function Student() {
  const [students, setStudent] = useState([]);
  const [isForbidden, setIsForbidden] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://demomernapp-1.onrender.com/students", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setStudent(res.data))
      .catch(() => setIsForbidden(true));
  }, []);

  if (isForbidden) {
    return <p>FORBIDDEN</p>;
  }

  return (
    <div>
      <h3>list students</h3>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>birthday</th>
            <th>grade</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.birthday}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Student;
