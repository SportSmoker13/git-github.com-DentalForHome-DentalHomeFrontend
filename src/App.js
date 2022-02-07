import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./components/dashboard/DashBoard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { useState } from "react";
import MyPlan from "./components/plan/MyPlan";

function App() {

  const[loggedIn,setLoggedIn] = useState(false)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" exact element={<DashBoard />} />
          {/* {loggedIn ? <Navigate to="/home" />} */}
          <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/myplan" element={<MyPlan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
