import React from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";
import "./footer.css";
import Link from "next/link";

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
            <Link href="#">
              <AiFillFacebook />
            </Link>
          </li>
          <li>
            <Link href="#">
              <CgInstagram />
            </Link>
          </li>
          <li>
            <Link href="#">
              <AiFillTwitterSquare />
            </Link>
          </li>
        </ul>
      </div>
      <div className="services">
        <h3>Services</h3>
        <ul>
          <li>
            <Link href="#" className="text">
              Automation
            </Link>
          </li>
          <li>
            <Link href="#" className="text">
              Web Development
            </Link>
          </li>
          <li>
            <Link href="#" className="text">
              Application Development
            </Link>
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
            <Link href="tel:+918789658374" className="text">
              Tel: +918789658374
            </Link>
          </li>
          <li>
            <Link href="mailto:eive.autonetics@easywaytolearn.com" className="text">
              Email: eive.autonetics@easywaytolearn.com
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
