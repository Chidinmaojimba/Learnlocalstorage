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
//import Navigation from "./component/Navigation";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeredUsers" element={<RegisteredUsers />} /> 
        {/* <Route path="/navigation" element={<Navigation />} /> */}

      </Routes>
   
  );
}

export default App;