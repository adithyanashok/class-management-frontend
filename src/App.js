import Home from "./pages/Home";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import Timetable from "./pages/Timetable/Timetable";
import Events from "./pages/Events/Events";
import Attendance from "./pages/Attendance/Attendance";
import Notes from "./pages/Notes/Notes";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='attendance' element={<Attendance/>} />
          <Route path='events' element={<Events/>} />
          <Route path='Notes' element={<Notes/>} />
          <Route path='timetable' element={<Timetable/>} />
          <Route path='login' element={<Login/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
