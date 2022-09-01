import React from "react";
import "./Success.css";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
const Success = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <div className="success-page">
      <div className="message">
        <p>Success Payment</p>
        <button onClick={onClick}>Home</button>
      </div>
    </div>
  );
};

export default Success;
