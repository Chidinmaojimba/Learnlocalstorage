import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

   
    if (  !email || !password) {
      setMessage("Fill all inputs");
      return;
    }

    
    const users = JSON.parse(localStorage.getItem("users")) || [];

   
    const foundUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (foundUser) {        
      localStorage.setItem("user", JSON.stringify(foundUser));
      navigate("/dashboard");
    } else {
      setMessage("Input is invalid!!");
    }
  };

  return (
     <div className="container">
      <Navigation />
    <div className="card">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

     
      {message && <p>{message}</p>}

      <p>
        Don't have an account?{" "}
        <Link to="/">Sign Up</Link>
      </p>
    </div>
    </div>
  );
}

export default Login;