import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import { useSelector } from "react-redux";
import Attendance from '../../images/attendance.png'
import Events from '../../images/Events.jpg'
import Notes from '../../images/note-taking.png'
import Students from '../../images/students.jpg'
import Timetable from '../../images/timetable.jpg'

const Cards = () => {
  const teacher = useSelector((state) => state.user?.currentUser?.teacher);

  return ( 
    <div className="card-container">
      {teacher && (
        <div className="cards">
          <div className="img">
            <img
              src={Students}
              alt=""
            />
          </div>
          <div className="details">
            <p>Students</p>
            <Link to="/students">
              <button>Enter</button>
            </Link>
          </div>
        </div>
      )}
      <div className="cards">
        <div className="img">
          <img
            src={Attendance}
            alt=""
          />
        </div>
        <div className="details">
          <p>Attendance</p>
          <Link to="/attendance">
            <button>Enter</button>
          </Link>
        </div>
      </div>

      <div className="cards">
        <div className="img">
          <img
            src={Timetable}
            alt=""
          />
        </div>
        <div className="details">
          <p>Timetable</p>
          <Link to="/timetable">
            <button>Enter</button>
          </Link>
        </div>
      </div>

      <div className="cards">
        <div className="img">
          <img
            src={Notes}
            alt=""
          />
        </div>
        <div className="details">
          <p>Notes</p>
          <Link to="/notes">
            <button>Enter</button>
          </Link>
        </div>
      </div>

      <div className="cards">
        <div className="img">
          <img
            src={Events}
            alt=""
          />
        </div>
        <div className="details">
          <p>Events</p>
          <Link to="/events">
            <button>Enter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
