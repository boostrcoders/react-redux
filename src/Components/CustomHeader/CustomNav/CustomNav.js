import React from "react";
import "./CustomNav.scss";

function CustomNav(props) {
  const showMobileNav = () => {
    let toggle = document.querySelector("nav").style.height;
    console.log(toggle);
    if (toggle === "0px" || toggle === "") {
      document.querySelector("nav").style.height = "210px";
      document.querySelector(".icon").classList.add("show");
    } 
    else {
      document.querySelector("nav").style.height = "0px";
      document.querySelector(".icon").classList.remove("show");
    }
  };
  return (
    <div className="custom-nav">
      <nav>
        <div className="icon" onClick={showMobileNav}>
          <div className="hamburger" />
        </div>
        <ul id="nav-body">
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CustomNav;
