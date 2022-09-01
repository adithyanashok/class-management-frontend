import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddAnnouncement = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const announcement = {
    name,
    message,
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/announcement",
        announcement
      );
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
    navigate("/announcement");
  };
  return (
    <>
      <Navbar />
      <div className="add-announcement">
        <div className="ann-inputs">
          <h3>Send Annoucement</h3>
          <input
            type="text"
            placeholder="Enter Submit"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Enter Message"
            cols="30"
            rows="3"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={handleClick}>Send</button>
        </div>
      </div>
    </>
  );
};

export default AddAnnouncement;
