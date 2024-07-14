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
      alert("Enter your full name");
      return;
    }
    if (!email) {
      alert("Enter your email");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Enter email correctly");
    }
    if (!password) {
      alert("Enter password");
      return;
    }
    if (password.length < 6) {
      alert("Password should contain at least 6 characters");
      return;
    }
    if (!dob) {
      alert("Enter date of birth");
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
      alert("User already added");
      return;
    }

    usersData.push(newUser);
    localStorage.setItem("usersData", JSON.stringify(usersData));

    alert("User added successfully");
    form.reset();
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
