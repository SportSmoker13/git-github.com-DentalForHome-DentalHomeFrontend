import React from "react";
import Banner from "../dashboard/Banner";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Appointments from "./Appointments";
import ScheduleAppointment from "./ScheduleAppointment";
import '../../css/Booking.css'

function Booking() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Banner />
      <div className="booking-head">
          My bookings
      </div>
      <div className="booking-main">

        <Appointments />
        <ScheduleAppointment />
      </div>
    </div>
  );
}

export default Booking;
