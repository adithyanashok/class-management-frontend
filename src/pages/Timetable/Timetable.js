import React, { useEffect, useState } from "react";
import "./Timetable.css";
import Table from "react-bootstrap/Table";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
const Timetable = () => {
  const teacher = useSelector((state) => state.user.currentUser.teacher);
  const [timetable, setTable] = useState([]);
  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const res = await axiosInstance.get("/timetable");
        setTable(res.data[0].timetable);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTimetable();
  }, []);
  return (
    <>
      <Navbar />
      {teacher && (
        <Link to="add-timetable" className="add-button">
          Add Timetable
        </Link>
      )}
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Day</th>
              <th>1st Period</th>
              <th>2nd Period</th>
              <th>3rd Period</th>
              <th>4th Period</th>
              <th>5th Period</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((table) => (
              <tr key={table._id}>
                <td>{table.day}</td>
                <td>{table.FirP}</td>
                <td>{table.SecP}</td>
                <td>{table.ThirP}</td>
                <td>{table.ForP}</td>
                <td>{table.FifP}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Timetable;
