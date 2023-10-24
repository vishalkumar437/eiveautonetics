import React from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";
import "./footer.css";
import Link from "next/link";
import logo from "../../../public/eive.png"
import Image from "next/image"
const Footer = () => {
  return (
    <footer id="contact" className="container footer__container">
      <div className="about">
        <Image src={logo} alt={"Eive"} style={{height:"120px",width:"120px"}}/>
        
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
            , Telangana IN
            </address>
          </li>
          <li>
            <Link href="tel:+919830345551" className="text">
              Tel: +919830345551
            </Link>
          </li>
          <li>
            <Link href="mailto:eive.autonetics@easywaytolearn.com" className="text">
              Email: contact@eiveautonetics.com
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
