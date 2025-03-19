import Axios from "axios";
import React, { useEffect, useState } from "react";

function FacultyList() {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    Axios.get("https://67cd8877125cd5af75780ff8.mockapi.io/Faculty")
      .then((response) => {
        console.log(response);
        setFaculties(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="col-12 text-center mt-5">Faculty List</h1>
          <div className="col-12 text-end">
            <a href="/add" className="px-5 py-2 btn btn-primary mb-5">
              Add +
            </a>
          </div>
          {faculties.map((fac) => {
            return (
              <div className="col-3 card" key={fac.id}>
                <img
                  src={fac.Image}
                  className="card-img-top"
                  alt="Faculty Image"
                />
                <div className="card-body">
                  <h5 className="card-title">{fac.Name}</h5>
                  <p className="card-text">{fac.Course}</p>
                  <p className="card-text">{fac.Email}</p>
                  <div className="d-flex gap-4">
                    <a
                      href={"/edit/" + fac.id}
                      className="btn btn-primary w-50"
                    >
                      Edit
                    </a>
                    <button
                      className="btn btn-danger w-50"
                      onClick={() => {
                        const deleteFaculty = confirm(
                          "Are you sure you want to delete this Faculty?"
                        );

                        if (deleteFaculty) {
                          Axios.delete(
                            "https://67cd8877125cd5af75780ff8.mockapi.io/Faculty/" +
                              fac.id
                          ).then(() => {
                            location.reload();
                          });
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FacultyList;
