import React, { useEffect, useState } from "react";
import "./Students.css";
import Table from "react-bootstrap/Table";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
const Students = () => {
  const teacher = useSelector((state) => state.user.currentUser.teacher);
  const [student, setStudent] = useState([]);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axiosInstance.get("/students");
        setStudent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudents();
  }, []);
  return (
    <>
      <Navbar />
      {teacher && (
        <Link to="/add-student" className="add-button">
          Add Student
        </Link>
      )}
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>StudentId</th>
            </tr>
          </thead>
          <tbody>
            {student.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.mobile}</td>
                <td>{student.studentId}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Students;
