import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ UserEmail: "", UserPassword: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/User/login", user, {
      withCredentials: true,
    })
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Login</h1>
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                User Email
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Userrname"
                value={user.UserEmail}
                onChange={(e) => {
                  setUser({ ...user, UserEmail: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                User Password
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Password"
                value={user.UserPassword}
                onChange={(e) => {
                  setUser({ ...user, UserPassword: e.target.value });
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary d-block mb-4">
              Submit
            </button>
            <a href="/signup">Already have an account? Register here</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
