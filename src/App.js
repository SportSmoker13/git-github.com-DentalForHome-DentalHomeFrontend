import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./components/dashboard/DashBoard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { useState } from "react";
import MyPlan from "./components/plan/MyPlan";
import FamilyPlan from "./components/plan/FamilyPlan";
import Booking from "./components/booking/Booking";
import Edit from "./components/edit/Edit";
import Service from "./components/service/Service";

function App() {

  const[loggedIn,setLoggedIn] = useState(false)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" exact element={<DashBoard />} />
          {/* {loggedIn ? <Navigate to="/home" />} */}
          <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/register" element={<Register loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/myplan" element={<MyPlan />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
