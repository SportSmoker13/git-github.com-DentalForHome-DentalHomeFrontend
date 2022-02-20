import React from "react";
import Banner from "../dashboard/Banner";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ServiceCard from "./ServiceCard";
import "../../css/Service.css";

function Service() {
  const serviceData = [
    {
      text: "Root Canal Treatment",
    },
    {
      text: "Teeth Extraction",
    },
    {
      text: "Dental Filling",
    },
    {
      text: "Teeth Pain First-Aid",
    },
    {
      text: "Teeth Cleaning",
    },
    {
      text: "Teeth Whitening",
    },
    {
      text: "Initial Oral Examination",
    },
    {
      text: "50% off on (Bridges Crowns)",
    },
    {
      text: "Unlimited X-ray",
    },
    {
      text: "Free Pick & Drop by our ambulances",
    },
  ];

  return (
    <div>
      <Sidebar />
      <Navbar />
      <Banner />
      <div className="service-main">
        <div className="service-main-title">
          <div className="service-title-top">Services</div>
          <div className="service-title-bottom">Services from your plan</div>
        </div>
        <div className="service-main-card">
          {serviceData.map((data) => (
            <ServiceCard content={data.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
