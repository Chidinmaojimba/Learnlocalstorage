import "../styles/registeredUsers.css";

function RegisteredUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
   
        <>
      <div className="container-RU">
      <div className="card-RU">
        <h2>Registered Users </h2>

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Password</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
        </>
     
  );
}

export default RegisteredUsers;



