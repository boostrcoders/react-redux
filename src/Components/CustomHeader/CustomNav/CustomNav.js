import React from "react";
import "./CustomNav.scss";

function CustomNav(props) {
  const showMobileNav = () => {
    let toggle = document.querySelector("#nav-body").style.marginTop;

    if (toggle === "0px") {
      document.querySelector("#nav-body").style.marginTop = "-200px";
      document.querySelector(".icon").classList.remove("show");
    } else {
      document.querySelector("#nav-body").style.marginTop = 0;
      document.querySelector(".icon").classList.add("show");
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
