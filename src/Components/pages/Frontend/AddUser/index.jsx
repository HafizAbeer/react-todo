import React, { useState } from "react";

const AddUser = () => {
  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const form = document.getElementById("form");

  const randomId = () => Math.random().toString(36).slice(2);

  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    dob: "",
  });

  const addUser = (e) => {
    e.preventDefault();

    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

    let { fullName, email, password, dob } = state;
    if (!fullName) {
      showNotification("Enter your full name", "error");
      return;
    }
    if (!email) {
      showNotification("Enter your email", "error");
      return;
    }
    if (!emailRegex.test(email)) {
      showNotification("Enter email correctly", "error");
    }
    if (!password) {
      showNotification("Enter password", "error");
      return;
    }
    if (password.length < 6) {
      showNotification(
        "Password should contain at least 6 characters",
        "error"
      );
      return;
    }
    if (!dob) {
      showNotification("Enter date of birth", "error");
      return;
    }

    const newUser = {
      fullName,
      email,
      dob,
      uid: randomId(),
    };

    const checkUser = usersData.find((user) => user.email === email);

    if (checkUser) {
      showNotification("User already added", "error");
      return;
    }

    usersData.push(newUser);
    localStorage.setItem("usersData", JSON.stringify(usersData));

    showNotification("User added successfully", "success");
    form.reset();

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
    <main className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">To Add a User</h1>
          </div>
        </div>

        <div className="row">
          <div className="col mt-4">
            <div className="h-100">
              <div
                className=".card border border-2 rounded-5 mx-auto p-3 p-md-4"
                style={{ maxWidth: 400 }}
              >
                <h4 className="text-center mb-4">Input Data</h4>
                <form id="form" onSubmit={addUser}>
                  <div className="row">
                    <div className="col-12 mb-4">
                      <input
                        className="form-control custom-input"
                        type="text"
                        placeholder="Enter full name"
                        onChange={handleChange}
                        name="fullName"
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <input
                        className="form-control custom-input"
                        type="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        name="email"
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <input
                        className="form-control custom-input"
                        type="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                        name="password"
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <input
                        className="w-100 form-control custom-input"
                        type="date"
                        onChange={handleChange}
                        name="dob"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="col-12">
                    <button className="addUser btn btn-primary w-100">
                      Add User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddUser;
