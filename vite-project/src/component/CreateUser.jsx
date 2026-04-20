import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

function CreateUser() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name || !email || !age || !password) {
      setMessage("Fill all inputs to be completely registered");
      return;
    }

   
    const hasNumber = /\d/.test(password);
    if (!hasNumber) {
      setMessage("Password must contain at least one number");
      return;
    }

    const newUser = { name:name.trim(), email:email.trim(), age:age.trim(), password:password.trim() };

    
    const users = JSON.parse(localStorage.getItem("users")) || [];  

    
    users.push(newUser);  

    
    localStorage.setItem("users", JSON.stringify(users)); 

    
    setMessage("You have successfully registered "); 

    
    setName("");
    setEmail("");
    setAge("");
    setPassword(""); 
  };

  return (
    <div className="container">
      <Navigation />    
    <div className="card">
     
      <h2>Create User</h2>

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

     
      {message && <p>{message}</p>}

      <br />

      <button onClick={() => navigate("/registeredUsers")}>
        Registered Users
      </button>
    </div>
    </div>
  );
}

export default CreateUser;