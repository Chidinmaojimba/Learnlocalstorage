// const Login = () => {
//     return ( 
//         <>
        
//         </>
//      );
// }
 
// export default Login;


import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem("users")) || [];

    const updatedData = [...existingData, formData];

    localStorage.setItem("users", JSON.stringify(updatedData));

    console.log("Saved:", updatedData);

    // Clear form
    setFormData({
      name: "",
      email: "",
      age: ""
    });
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Age:</label><br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Login;