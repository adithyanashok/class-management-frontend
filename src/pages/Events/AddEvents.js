import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEvents } from "../../redux/apiCalls";

const AddEvents = () => {
  const [inputs, setInputs] = useState({});
  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + img.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, img);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const events = { ...inputs, img: downloadURL };
          addEvents(events, dispatch);
          navigate("/events");
        });
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="event-container">
        <div className="event-inputs">
          <h1 className="event-text">Enter Event Details</h1>
          <input
            name="name"
            type="text"
            placeholder="Enter Event Name"
            onChange={handleChange}
          />
          <input
            name="desc"
            type="text"
            placeholder="Enter Event Description"
            onChange={handleChange}
          />
          <input
            name="price"
            type="Number"
            placeholder="Enter Event Fee"
            onChange={handleChange}
          />
          <input
            accept="image"
            type="file"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button onClick={handleClick}>Add Event</button>
        </div>
      </div>
    </>
  );
};

export default AddEvents;
