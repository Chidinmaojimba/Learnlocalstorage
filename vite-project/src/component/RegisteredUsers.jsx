import "../styles/registeredUsers.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RegisteredUsers() {
  const navigate = useNavigate();

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  
  const handleDelete = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

 
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(users[index]);
  };

  
  const handleSave = () => {
    const updated = [...users];
    updated[editIndex] = editUser;

    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
    setEditIndex(null);
  };

  return (
    <div className="container-RU">
      <div className="card-RU">
        <h2>Registered Users</h2>

        <table className="table-RU">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                {editIndex === index ? (
                  <>
                    <td>
                      <input
                        value={editUser.name}
                        onChange={(e) =>
                          setEditUser({ ...editUser, name: e.target.value })
                        }
                      />
                    </td>

                    <td>
                      <input
                        value={editUser.email}
                        onChange={(e) =>
                          setEditUser({ ...editUser, email: e.target.value })
                        }
                      />
                    </td>

                    <td>
                      <input
                        value={editUser.age}
                        onChange={(e) =>
                          setEditUser({ ...editUser, age: e.target.value })
                        }
                      />
                    </td>

                    <td>
                      <input
                        value={editUser.password}
                        onChange={(e) =>
                          setEditUser({
                            ...editUser,
                            password: e.target.value,
                          })
                        }
                      />
                    </td>

                    <td>
                      <button className="save-btn" onClick={handleSave}>
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.password}</td>

                    <td className="actions">
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>


        {loggedInUser && (
          <button
            className="create-btn"
            onClick={() => navigate("/createUser")}
          >
            + Create User
          </button>
        )}
      </div>
    </div>
  );
}

export default RegisteredUsers;
