import React from "react";
import { SiBandrautomation } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { MdOutlineDeveloperMode } from "react-icons/md";
import {BsLaptop} from "react-icons/bs"

const ServicesComp = () => {
  return (
    <div className="services__servicesComp">
      <div>
        <h1>Our Servcices For Technology You Need</h1>
        <button className="btn btn-primary">Load More</button>
      </div>
      <div>
        <div>
          <div className="icon">
            <SiBandrautomation />
          </div>
          <h4>Automation</h4>
          <p>Automate Your task with advance tools like RPA</p>
        </div>
        <div>
          <div className="icon">
            <GrReactjs />
          </div>
          <h4>Web</h4>
          <p>
            We build responsive, scalable web applications.
          </p>
        </div>
        <div>
          <div className="icon">
            <MdOutlineDeveloperMode />
          </div>
          <h4>Application Development</h4>
          <p>Build scalable IOS and Android Application and scale your buisness.</p>
        </div>
        <div>
          <div className="icon"><BsLaptop /></div>
          <h4>IT Consultant</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
