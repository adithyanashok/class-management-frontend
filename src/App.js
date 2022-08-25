import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import Timetable from "./pages/Timetable/Timetable";
import Events from "./pages/Events/Events";
import Attendance from "./pages/Attendance/Attendance";
function App() {
  return (
    <div className="App">
      <Attendance/>
    </div>
  );
}

export default App;
