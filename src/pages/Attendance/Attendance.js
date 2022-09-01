import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { axiosInstance } from "../../config";
import "./Attendance.css";
const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [name, setInput] = useState("");
  console.log(name);
  const handleClick = async () => {
    try {
      const res = await axiosInstance.post("/attendance", {
        name,
      });
      console.log(res.data)
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axiosInstance.get("/attendance");
        setAttendance(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAttendance();
  }, []);
  return (
    <>
      <Navbar />
      <div className="attendance-container">
        <div className="attendance">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleClick}>Submit</button>
        </div>
        {attendance.map((name) => (
          <div className="attendance-list" key={name._id}>
            <h3>{name.name}</h3>
            <p>
              {format(
                new Date(name.createdAt).getTime(),
                "dd-MM-yyyy 'at' h:m a "
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Attendance;
