import React, { useState } from "react";
import Adminnavbar from "./Adminnavbar";
import { Link } from "react-router-dom";

import {
  FaUser,
  FaHourglass,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function AdminDashboard() {
  function handleLogout() {
    navigate("/");
  }
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="h-screen text-black "
      style={{
        backgroundImage: "linear-gradient(115deg, red, black)",
      }}
    >
      <Adminnavbar />
      <div className="grid grid-cols-2 gap-16 sm:grid-cols-2 mt-24 ml-36 ">
        <Link to="/userlist">
          <div
            className="relative overflow-hidden rounded-lg px-10 pb-12 pt-5 h-44 w-96 shadow sm:px-6 sm:pt-6"
            style={{
              borderRadius: "10px",
              border: "2px solid #333",
              background: hovered
                ? "linear-gradient(to bottom right, yellow, green)"
                : "linear-gradient(to bottom right, red, black)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaUser className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" />
          </div>
        </Link>
        <Link to="/pending">
          <div
            className="relative overflow-hidden rounded-lg px-10 pb-12 pt-5 shadow h-44 w-96 sm:px-6 sm:pt-6"
            style={{
              borderRadius: "10px",
              border: "2px solid #333",
              background: hovered
                ? "linear-gradient(to bottom right, orange, blue)"
                : "linear-gradient(to bottom right, green, pink)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaHourglass className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" />
          </div>
        </Link>
        <Link to="/approved">
          <div
            className="relative overflow-hidden rounded-lg px-10 pb-12 pt-5 h-44 w-96 shadow sm:px-6 sm:pt-6"
            style={{
              borderRadius: "10px",
              border: "2px solid #333",
              background: hovered
                ? "linear-gradient(to bottom right, white, brown)"
                : "linear-gradient(to bottom right, gray, green)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaCheckCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" />
          </div>
        </Link>
        <Link to="/rejected">
          <div
            className="relative overflow-hidden rounded-lg px-10 pb-12 pt-5 h-44 w-96 shadow sm:px-6 sm:pt-6"
            style={{
              borderRadius: "10px",
              border: "2px solid #333",
              background: hovered
                ? "linear-gradient(to bottom right, silver, yellow)"
                : "linear-gradient(to bottom right,  black, #4f4f4f)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaTimesCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" />
          </div>
        </Link>{" "}
      </div>
    </div>
  );
}

export default AdminDashboard;
