import React from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="container footer__container">
      <div className="about">
        <h3>LOGO</h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe
          voluptatum repellat placeat aperiam. Molestiae consectetur molestias
          magni laudantium doloremque!
        </p>
        <ul className="footer__socials">
          <li>
            <a href="#">
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <CgInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillTwitterSquare />
            </a>
          </li>
        </ul>
      </div>
      <div className="services">
        <h3>Services</h3>
        <ul>
          <li>
            <a href="#" className="text">
              Automation
            </a>
          </li>
          <li>
            <a href="#" className="text">
              Web Development
            </a>
          </li>
          <li>
            <a href="#" className="text">
              Application Development
            </a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <ul>
          <li>
            <address className="text">
            Hyderabad
            Hyderabad, Hyderabad, Telangana IN
            </address>
          </li>
          <li>
            <a href="tel:+918789658374" className="text">
              Tel: +918789658374
            </a>
          </li>
          <li>
            <a href="mailto:eive.autonetics@easywaytolearn.com" className="text">
              Email: eive.autonetics@easywaytolearn.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
