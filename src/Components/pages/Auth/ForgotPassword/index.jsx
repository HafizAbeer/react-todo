import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [state, setState] = useState({ email: "" });

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleForgotPassword = (e) => {
    e.preventDefault();

    let { email } = state;

    if (!email) {
      alert("Please enter email");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    } else {
      alert("Reset link has been sent to the registered email");
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
              <h2 className="text-center text-primary mb-4">Forgot Password</h2>

              <form>
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
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100"
                      onClick={handleForgotPassword}
                    >
                      Send Email
                    </button>
                    <p className="mb-0 mt-2 text-center">
                      Back to <Link to={"/login"}>Login</Link>
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

export default ForgotPassword;
