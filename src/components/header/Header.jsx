import "./Header.css";
import Logo from "./Logo/Logo";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import iconSun from "../../assets/icons/sun-fill.svg";
import iconMoon from "../../assets/icons/moon-fill.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const handleClick = () => {
    const toggleSwitch = document.querySelector(".toggle-switch");
    if (mode === "light") {
      localStorage.setItem("mode", "dark");
      setMode("dark");
      toggleSwitch.classList.add("on");
      document.body.classList.add("mode-dark");
    } else {
      localStorage.setItem("mode", "light");
      setMode("light");
      toggleSwitch.classList.remove("on");
      document.body.classList.remove("mode-dark");
    }
  };
  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("mode-dark");
      document.querySelector(".toggle-switch").classList.add("on");
      document
        .getElementById("checkbox-toggle-switch")
        .setAttribute("checked", "checked");
    }
  }, []);
  return (
    <header>
      <Navbar expand="lg">
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Skills</Nav.Link>
            <Nav.Link href="#">Work Experiences</Nav.Link>
            <Nav.Link href="#">Open Source</Nav.Link>
            <Nav.Link href="#">Achievements</Nav.Link>
            <Nav.Link href="#">Blogs</Nav.Link>
            <Nav.Link href="#">Talks</Nav.Link>
            <Nav.Link href="#">Resume</Nav.Link>
            <Nav.Link href="#">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="toggle-switch">
          <img src={iconMoon} alt="" />
          <input
            type="checkbox"
            id="checkbox-toggle-switch"
            onClick={handleClick}
          />
          <img src={iconSun} alt="" style={{ maxWidth: "16px" }} />
          <span className="ball"></span>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
