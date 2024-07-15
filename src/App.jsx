import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/pages/Auth/Login";
import Register from "./Components/pages/Auth/Register";
import ForgotPassword from "./Components/pages/Auth/ForgotPassword";
import Contact from "./Components/pages/Frontend/Contact";
import About from "./Components/pages/Frontend/About";
import AddUser from "./Components/pages/Frontend/AddUser";
import Home from "./Components/pages/Frontend/Home";
import Users from "./Components/pages/Frontend/Users";

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgotpassword";

  return (
    <>
      {!isAuthRoute && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/AddUsers" element={<AddUser />} />
      </Routes>
      {!isAuthRoute && <Footer />}
    </>
  );
};

export default App;
