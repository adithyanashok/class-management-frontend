import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config";
const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);
  const handleLogin = async (e) => {
    dispatch(loginStart());
    e.preventDefault();
    try {
      const res = await axiosInstance.post(
        "/auth/studentlogin",
        { studentId, password }
      );
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <div className="login-container">
      <div className="login-inputs">
        <h1 className="login-text">Enter Details</h1>
        {error && <span>Wrong StudentId or Password</span>}
        <input
          name="studentId"
          type="text"
          placeholder="Enter ID"
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
