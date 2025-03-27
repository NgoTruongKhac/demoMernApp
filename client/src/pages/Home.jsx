import { Link, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Student from "./Student";

function Home() {
  return (
    <div className="navbar">
      <div>
        <nav>
          <div>
            <Link to="/login">login</Link>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
}
export default Home;
