// import { useState } from "react";

// function Login() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: ""
//   });

//    const [user, setUser] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//        ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newUser = {
//       name: formData.name,
//       email: formData.email,
//       age: formData.age
//     };

//     // overwrite previous user
//     setUser(newUser);
//     localStorage.setItem("user", JSON.stringify(newUser));

//     setFormData({
//       name: "",
//       email: "",
//       age: ""
//    });
//   };

//   return (
//     <div>
//       <h2>Login Form</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         /><br></br><br></br>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         /><br></br><br></br>

//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           value={formData.age}
//           onChange={handleChange}
//         /><br></br><br></br>

//         <button type="submit">Save</button>
//       </form>

//      {user && (
//         <div>
//           <h3>Saved User</h3>
//           <p>{user.name}</p>
//           <p>{user.email}</p>
//           <p>{user.age}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;




import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      age: age
    };

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <h2>Login Form</h2>

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

        <button type="submit">Save</button>
      </form>

      {user && (
        <div>
          <h3>Saved User</h3>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
