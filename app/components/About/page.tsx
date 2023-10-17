import React from "react";
import { CircularProgress, Typography } from "@mui/joy";
import "./about.css";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  const percentage = 75;

  return (
    <section className="about__container">
      <div className="container">
        <div>
          <h1>Advance Innovation For IT Automations</h1>
          <p className="text">
            At Eive Autonetics, we are at the forefront of automation and
            technology, paving the way for businesses to thrive in the digital
            age. Our mission is to empower organizations with cutting-edge
            solutions that enhance efficiency, streamline processes, and drive
            productivity.
          </p>
          <div className="about__buttons">
            <Link href={"/contact"} style={{margin:"10px"}} className="btn btn-primary">Get In Touch</Link>
            <a href="#services">
              <span>Our Services</span>
            </a>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="about__image">
            <Image
              src="https://st4.depositphotos.com/17586788/i/600/depositphotos_247586928-stock-photo-a-successful-business-girl-in.jpg"
              alt="about"
              width={10000}
              height={10000}
            />
          </div>
          <div className="about__progress">
            <div className="progress_bar">
              <CircularProgress
                size="lg"
                determinate
                value={percentage as number}
              >
                <Typography>{percentage}%</Typography>
              </CircularProgress>
            </div>
            <h4>
              Business Growth
              <br />
              <small>Level is high</small>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
