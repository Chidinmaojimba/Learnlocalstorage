// import "./App.css"; 
// import Login from "./component/Login";
 
// const App = () => {
//     return ( 
//     <>
//     <Login/>
//     </>
//      );
// }
 
// export default App;







import { Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";  
import Login from "./component/Login";
import RegisteredUsers from "./component/RegisteredUsers";
import CreateUser from "./component/CreateUser";
 import Profile from "./component/Profile";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeredUsers" element={<RegisteredUsers />} /> 
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
   
  );
}

export default App;