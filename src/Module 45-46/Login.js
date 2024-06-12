import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import AuthContext from "./authContext";

const Login = ({ setLoginUser }) => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("/auth");
      const users = response.data;

      const user = users.find((user) => user.email === email);

      if (user) {
        setLoginUser({ username: user.username, email: user.email });
        setIsAuthenticated(true);
        navigate("/contacts"); // Adjust the navigation path as needed
      } else {
        alert("Invalid email. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="Email"
            placeholder="Email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
