// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user"))
//   );

//   // Protect page
//   if (!user) {
//     return <h2>No user found. Please register first.</h2>;
//   }

//   const handleLogout = () => {
//     localStorage.removeItem("user"); // clear user
//     navigate("/"); // go to login page
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>

//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <p>Age: {user.age}</p>
//       <p>Password: {user.password}</p>

//       {/* 👇 Add this button */}
//       <button onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Dashboard;





import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // ✅ Get user directly from localStorage
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // ❌ Protect page
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
    <div className="card">
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