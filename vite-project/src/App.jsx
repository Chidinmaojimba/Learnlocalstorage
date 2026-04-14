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
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";  
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
   
  );
}

export default App;