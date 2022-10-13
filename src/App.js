import Home from "./pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login/Login";
import Timetable from "./pages/Timetable/Timetable";
import Events from "./pages/Events/Events";
import Attendance from "./pages/Attendance/Attendance";
import Notes from "./pages/Notes/Notes";
import axios from "axios";
// import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEvents from "./pages/Events/AddEvents";
import AddNotes from "./pages/Notes/AddNotes";
import AddStudent from "./pages/Students/AddStudent";
import Students from "./pages/Students/Students";
import Success from "./pages/Success/Success";
import Announcement from "./pages/Announcement/Announcement";
import AddAnnouncement from "./pages/Announcement/AddAnnouncement";

axios.defaults.withCredentials = true;

function App() {
  // const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
           {/* {currentUser && (  */}
            <>
              <Route index element={<Home />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="events" element={<Events />} />
              <Route path="add-event" element={<AddEvents />} />
              <Route path="Notes" element={<Notes />} />
              <Route path="add-note" element={<AddNotes />} />
              <Route path="timetable" element={<Timetable />} />
              <Route path="students" element={<Students />} />
              <Route path="add-student" element={<AddStudent />} />
              <Route path="success" element={<Success />} />
              <Route path="announcement" element={<Announcement />} />
              <Route path="add-announcement" element={<AddAnnouncement />} />
            </>
          {/* )}  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
