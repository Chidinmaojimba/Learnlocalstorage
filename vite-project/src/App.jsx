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
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   
  );
}

export default App;