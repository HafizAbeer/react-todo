import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let { email, password } = state;
    email = email.trim();

    if (!email) {
      alert("Enter email");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Enter correct email");
      return;
    }
    if (!password) {
      alert("Enter password");
      return;
    }
    if (password.length < 6) {
      alert("Invalid email or password");
      return;
    }

    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login successfully");
      navigate("/home");
    } else {
      alert("Invalid email or password");
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
              <h2 className="text-center text-primary mb-4">Login</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
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

                  <div className="mb-3">
                    <Link to={"/forgotpassword"}>Forgot Password</Link>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100">Login</button>
                    <p className="mb-0 mt-2 text-center">
                      Don't have an account?{" "}
                      <Link to={"/register"}>Register Now</Link>
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

export default Login;
