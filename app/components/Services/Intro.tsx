import Link from "next/link";
import React from "react";
function Intro() {
  return (
    <div className="services__intro">
      <div className="pos-rel">
        <div className="services__intro__image">
          <img
            src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="services__intro__text">
          <h1>We are the solutions for IT problems</h1>
          <p className="text">
            If you are using IT or IT-enabled services and want to upgrade your
            organization from manual to full-fledged automated IT system, then
            we can help you at great extent that too at affordable cost (One
            time development, implementation and yearly maintenance, if
            required). Location : Anywhere in world. We can deliver you this RPA
            model with the team of fresher’s to experienced resources by
            development, implementation and testing the RPA framework in your
            organization.
          </p>
          <Link href="/about" className="btn btn-primary">More About</Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
