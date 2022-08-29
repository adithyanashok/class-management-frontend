import React, { useEffect, useState } from "react";
import './Timetable.css'
import Table from 'react-bootstrap/Table';
import Navbar from "../../Components/Navbar/Navbar";
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
const Timetable = () => {
  const teacher = useSelector((state) => state.user.currentUser.teacher)

  const [timetable, setTable] = useState([])
  useEffect(() => {
    const fetchTimetable = async (req, res, next) => {
      try{
        const res = await axios.get('http://localhost:8800/api/timetable')
        setTable(res.data[0].timetable)
        console.log(res.data[0].timetable)

      }catch(err) {
        console.log(err)
      }
    }
    fetchTimetable()
  }, [])
  return (
    <>
    <Navbar/>
    {teacher && <Link to="add-timetable" className="add-button" >Add Timetable</Link>}

    <div className="table-container" >
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
         {
          timetable.map((table) => (
            <tr>
          <td>{table.day}</td>
          <td>{table.FirP}</td>
          <td>{table.SecP}</td>
          <td>{table.ThirP}</td>
          <td>{table.ForP}</td>
          <td>{table.FifP}</td>
        </tr>
          ))
        } 
      </tbody>
    </Table>
    </div>
    </>
  );
};

export default Timetable;
