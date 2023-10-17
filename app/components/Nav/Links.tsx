"use client"
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import "./style.css"
import Link from "next/link";
const Links = () => {
  const links = [
    "home",
    "about",
    "services",
    "contact"
  ];

  const [linksVisibility, setLinksVisibility] = useState(false);

  const toggleVisibility = () => {
    setLinksVisibility(!linksVisibility);
  };

  return (
    <>
      <div className="links__button hide__button">
          <button className="btn menu" onClick={toggleVisibility}>
            <RiMenu3Line />
          </button>
        </div>
        <div
          className={`links ${
            !linksVisibility ? "hide__links" : ""
          }`}
        >
          {links.map((link, index) => {
            if(link==="contact"){
              return <Link href={"/contact"}>{link}</Link>
            }else{
              return (
                <Link
                  key={`link-${index}`}
                  className={!index ? "active" : ""}
                  href={`/#${link}`}
                  onClick={toggleVisibility}
                >
                  {link}
                </Link>
              );
            }
            
          })}
        </div>
    </>
  );
};

export default Links;
