import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  //  Protect page
  if (!user) {
    return <h2>No user found. Please login first.</h2>;
  }

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove current user
    setUser(null); // update UI immediately
    navigate("/"); // go to register
  };

  return (
     
     <div className="container">
      <Navigation />
    <div className="card">
      
      <Navigation />
      <h2>Dashboard</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
    </div>
  );
}

export default Dashboard;