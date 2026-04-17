import { Link } from "react-router-dom";

function Navigation() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="nav">
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/RegisteredUsers">Registered Users</Link>
        </>
      ) : (
        <>
          <Link to="/">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;