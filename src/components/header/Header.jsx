import "./Header.css";
import Logo from "./Logo/Logo";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import iconSun from "../../assets/icons/sun-fill.svg";
import iconMoon from "../../assets/icons/moon-fill.svg";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

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
    // theme
    if (mode === "dark") {
      document.body.classList.add("mode-dark");
      document.querySelector(".toggle-switch").classList.add("on");
      document
        .getElementById("checkbox-toggle-switch")
        .setAttribute("checked", "checked");
    }
    // theme

    // header show/hide on scroll
    const header = document.querySelector("header");
    let scrollValue = 0;
    if (window.innerWidth > 1199) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > scrollValue && window.scrollY > 200) {
          header.classList.add("hidden");
        } else {
          header.classList.remove("hidden");
        }
        scrollValue = window.scrollY;
      });
    }
    // header show/hide on scroll
  }, []);
  return (
    <header>
      <Navbar expand="xl">
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <HashLink className="nav-link" to="/#skills">
              Skills
            </HashLink>
            <HashLink className="nav-link" to="/#experiences">
              Work Experiences
            </HashLink>
            <HashLink className="nav-link" to="/#open-source-projects">
              Open Source
            </HashLink>
            <HashLink className="nav-link" to="/#certifications">
              Certifications
            </HashLink>
            <HashLink className="nav-link" to="/#blogs">
              Blogs
            </HashLink>
            <a className="nav-link" to="#">
              Resume
            </a>
            <HashLink className="nav-link" to="/#contact">
              Contact Me
            </HashLink>
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
