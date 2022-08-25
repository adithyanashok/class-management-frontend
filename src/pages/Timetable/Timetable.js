import React from "react";
import './Timetable.css'
import Table from 'react-bootstrap/Table';
import Navbar from "../../Components/Navbar/Navbar";
const Timetable = () => {
  return (
    <>
    <Navbar/>
    <div className="table-container" >
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Java</td>
          <td>Javascript</td>
          <td>Python</td>
          <td>NodeJs</td>
          <td>Django</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  );
};

export default Timetable;
