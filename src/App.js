import Home from "./pages/Home";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import Timetable from "./pages/Timetable/Timetable";
import Events from "./pages/Events/Events";
import Attendance from "./pages/Attendance/Attendance";
import Notes from "./pages/Notes/Notes";
import axios from 'axios'
import { useSelector} from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./pages/Admin";
import AddEvents from "./pages/Events/AddEvents";

  axios.defaults.withCredentials = true

function App() {
  const {currentUser} = useSelector((state) => state.user)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}  />
          {currentUser && (<>
          <Route index element={<Home/>} />
          <Route path='attendance' element={<Attendance/>} />
          <Route path='events' element={<Events/>} />
          <Route path='Notes' element={<Notes/>} />
          <Route path='timetable' element={<Timetable/>} />
          <Route path='add-event' element={<AddEvents/>} />
          </>)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
