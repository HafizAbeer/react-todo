import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // Get existing user data from localStorage
  const existingUsers =
    JSON.parse(localStorage.getItem("registeredUsers")) || [];
  const navigate = useNavigate();

  const [state, setState] = useState({ fullName: "", email: "", password: "" });
  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleRegister = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let { fullName, email, password } = state;

    if (!fullName) {
      showNotification("Enter name", "error");
      return;
    }
    if (!email) {
      showNotification("Enter email", "error");
      return;
    }
    if (!emailRegex.test(email)) {
      showNotification("Enter correct email", "error");
      return;
    }

    function isUserRegistered(email, users) {
      // Check if any user in the array has the given email
      return users.some((user) => user.email === email);
    }

    let emailToCheck = email;
    if (isUserRegistered(emailToCheck, existingUsers)) {
      showNotification("User already registered", "error");
      return;
    }

    if (!password) {
      showNotification("Enter password", "error");
      return;
    }
    if (password.length < 6) {
      showNotification("Length of password must be atleast 6", "error");
      return;
    }

    const formData = { fullName, email, password };

    // Add the new user data to the existing user data array
    const updatedUsers = [...existingUsers, formData];

    if (formData) {
      // Store the updated user data array in localStorage
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
      showNotification("User Registered", "success");
      navigate("/login");
    }

    function showNotification(message, type) {
      let bgColor;

      switch (type) {
        case "success":
          bgColor = "linear-gradient(to right, #1D976C, #93F9B9)";
          break;
        case "error":
          bgColor = "linear-gradient(to right, #93291e, #ed213a)";
          break;
        default:
          bgColor = "#000";
      }

      Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  };

  return (
    <main className="auth py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="card border-none mx-auto p-3 p-md-4"
              style={{ maxWidth: 400 }}
            >
              <h2 className="text-center text-primary mb-4">Register</h2>

              <form onSubmit={handleRegister}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type full name"
                      name="fullName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Type email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Type password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100">Register</button>
                    <p className="mb-0 mt-2 text-center">
                      Already have an account?{" "}
                      <Link to={"/login"}>Login Now</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
