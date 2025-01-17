import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary py-2">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="mb-0 text-center text-white ">
              &copy; {year}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
