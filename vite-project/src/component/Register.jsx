import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check empty fields
    if (!name || !email || !age || !password) {
      setMessage("Fill all inputs to be completely registered");
      return;
    }

    // ❌ Check password has a number
    const hasNumber = /\d/.test(password);
    if (!hasNumber) {
      setMessage("Password must contain at least one number");
      return;
    }

    const newUser = { name, email, age, password };

    // ✅ Get old users or empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Add new user
    users.push(newUser);

    // ✅ Save back
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ Success message
    setMessage("You have successfully registered ✅");

    // Clear inputs
    setName("");
    setEmail("");
    setAge("");
    setPassword("");
  };

  return (
    <div className="container">
    <div className="card">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Save</button>
      </form>

      {/* ✅ Show message */}
      {message && <p>{message}</p>}

      <br />

      <button onClick={() => navigate("/login")}>
        Go to Dashboard
      </button>
    </div>
    </div>
  );
}

export default Register;