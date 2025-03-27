import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://demomernapp-1.onrender.com/users/login",

        {
          name: username,
          pass: password,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refeshToken", response.data.refeshToken);
      navigate("/student");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
      {errMessage && <p style={{ color: "red" }}>{errMessage}</p>}
    </div>
  );
}
export default Login;
