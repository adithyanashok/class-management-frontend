import axios from "axios";
import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Students.css";
const AddStudent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [teacher, setSelect] = useState(false);
  const students = {
    name,
    address,
    mobile,
    studentId,
    password,
    teacher
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/createstudent",
        students
      );
      console.log(res.data)
      navigate("/students");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="add-students-wrapper">
        <div className="inputs">
          <h3>Add Student/Teacher</h3>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Student Id"
            onChange={(e) => setStudentId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="select">Teacher</label>
          <select name="teacher" onChange={(e) => setSelect(e.target.value)}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
