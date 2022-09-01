import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Announcement.css";
import { format } from "date-fns";
import "../../App.css";
import axios from "axios";
const Announcement = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/announcement");
        setMessage(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessage();
  }, []);

  return (
    <>
      <Navbar />
      <Link to="/add-announcement" className="add-button">
        Add Announcement
      </Link>
      <div className="ann-div">
        {message.map((message) => (
          <div className="announcement-wrapper" key={message._id}>
            <p>
              {format(
                new Date(message.createdAt).getTime(),
                "dd-MM-yyyy 'at' h:m a "
              )}
            </p>
            <h4>{message.name}</h4>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Announcement;
