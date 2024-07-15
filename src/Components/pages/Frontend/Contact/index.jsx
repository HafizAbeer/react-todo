import React from "react";

const Contact = () => {
  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Contact Us</h1>
          </div>
        </div>

        <div className="row">
          <div className="col mt-4">
            <div className="h-100">
              <div
                className=".card bg-white border border-2 rounded-5 mx-auto p-3 p-md-4"
                style={{ maxWidth: 600 }}
              >
                <form id="form" className="text-black">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="firstName" className="mb-1">
                        First Name <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={handleChange}
                        name="firstName"
                        id="firstName"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="lastName" className="mb-1">
                        Last Name <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        className="form-control "
                        type="text"
                        onChange={handleChange}
                        name="lastName"
                        id="lastName"
                        required
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <label htmlFor="email">
                        Email <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        className="form-control "
                        type="email"
                        onChange={handleChange}
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="queryType" className="d-block">
                        Query Type <span style={{ color: "red" }}>*</span>
                      </label>
                      <div
                        className="btn-group btn-group-toggle d-flex"
                        data-toggle="buttons"
                      >
                        <label className="btn border rounded-2 border-1 flex-fill m-2">
                          <input
                            type="radio"
                            name="queryType"
                            value={"generalEnquiry"}
                            autoComplete="off"
                            onChange={handleChange}
                          />
                          {" General Enquiry"}
                        </label>
                        <label className="btn border rounded-2 border-1 flex-fill m-2">
                          <input
                            type="radio"
                            name="queryType"
                            value={"supportRequest"}
                            autoComplete="off"
                            onChange={handleChange}
                          />
                          &nbsp;
                          {"Support Request "}
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="mb-1">
                        Message <span style={{ color: "red" }}>*</span>
                      </label>
                      <div>
                        <textarea
                          name="message"
                          id="message"
                          className="w-100 border rounded-2 border-1"
                          rows={4}
                        >
                          {" "}
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-check mt-2 mb-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="agreeCheck"
                      required
                    />
                    <label class="form-check-label" htmlFor="agreeCheck">
                      I consent to being contacted by the team{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 mt-2">
                      Submit
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

export default Contact;
