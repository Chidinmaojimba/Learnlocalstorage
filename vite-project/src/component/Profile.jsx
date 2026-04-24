import { useState } from "react";
import Navigation from "./Navigation";
import "../styles/profile.css";

function Profile() {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(savedUser || {});
  const [message, setMessage] = useState("");
    
  if (!savedUser) {
    return <h2>Please login to view profile</h2>;
  }

  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUser({ ...user, profilePic: imageURL });
    }
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));

   
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email ? user : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setMessage("Profile updated successfully ✅");
  };

  return (
    <div className="container">
      <Navigation />

      <div className="card profile-card">
        <h2>User Profile</h2>

        <div className="profile-image">
          <img
            src={
              user.profilePic ||
              "https://via.placeholder.com/120"
            }
            alt="Profile"
          />

          <input type="file" onChange={handleImage} />
        </div>

        {/* 🧾 FORM */}
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name || ""}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={user.age || ""}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dob"
            value={user.dob || ""}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleSave}>Save Changes</button>

        {message && <p className="success">{message}</p>}
      </div>
    </div>
  );
}

export default Profile;