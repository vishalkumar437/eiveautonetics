import { Component } from "react";
import Contact from "./Contact";
import Socials from "./Socials";
import "./header.css";
function Header() {
    return (
      <header>
        <div className="container container__header">
          <Contact />
          <Socials />
        </div>
      </header>
    );
  }
export default Header;
