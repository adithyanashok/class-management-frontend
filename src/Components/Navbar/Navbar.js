import React from "react";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import { logout } from "../../redux/userSlice";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const logoutClick = () => {
    dispatch(logout);
    navigate("/login");
  };
  return (
    <div className="navbar">
      <Link
        to="/"
        style={{
          color: "inherit",
          textDecoration: "none",
          textAlign: "center",
          fontSize: "48px",
          marginLeft: "13px",
        }}
      >
        ABC
      </Link>
      <div className="left">
        <Link style={{ color: "inherit" }} to="/announcement">
          <NotificationsIcon />
        </Link>
        <h3>{currentUser.name}</h3>
        <h3 onClick={logoutClick}>Logout</h3>
      </div>
    </div>
  );
};

export default Navbar;
