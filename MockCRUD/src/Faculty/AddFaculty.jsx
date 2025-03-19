import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddFaculty() {
  const [faculty, setFaculty] = useState({
    Name: "",
    Course: "",
    Email: "",
    image: "https://loremflickr.com/640/480/animals",
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    Axios.post("https://67cd8877125cd5af75780ff8.mockapi.io/Faculty", faculty)
      .then((response) => {
        console.log(response);

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row gap-2">
        <h1 className="col-12 text-center">Add Faculty</h1>
        <div className="col-12">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={faculty.Name}
            onChange={(e) => {
              setFaculty({ ...faculty, Name: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label htmlFor="course" className="form-label">
            Course
          </label>
          <input
            type="text"
            className="form-control"
            id="course"
            value={faculty.Course}
            onChange={(e) => {
              setFaculty({ ...faculty, Course: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={faculty.Email}
            onChange={(e) => {
              setFaculty({ ...faculty, Email: e.target.value });
            }}
          />
        </div>
        <div className="col-12 text-center mt-4">
          <a href="/" className="w-25 btn btn-secondary me-2">
            Cancel
          </a>
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="w-25 btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFaculty;
