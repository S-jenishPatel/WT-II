import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Get All Products
  useEffect(() => {
    Axios.get("http://localhost:3000/Product", { withCredentials: true }).then(
      (response) => {
        setProducts(response.data);
      }
    );
  }, []);

  const logout = () => {
    Axios.get("http://localhost:3000/User/logout", {
      withCredentials: true,
    })
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="text-center my-5">
        <button
          onClick={() => {
            logout();
          }}
          className="btn btn-primary"
        >
          Logout
        </button>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="card col-4" key={product._id}>
                <img
                  src={product.ProductImage}
                  className="card-img-top"
                  alt="Product Image"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.ProductName}</h5>
                  <p className="card-text text-lg">${product.ProductPrice}</p>
                  <a href="#" className="btn btn-primary">
                    Edit
                  </a>
                  <a href="#" className="btn btn-danger">
                    Delete
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
