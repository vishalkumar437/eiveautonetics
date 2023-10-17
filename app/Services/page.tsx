import Intro from "./Intro";
import ServicesComp from "./ServicesComp";
import "./services.css";
function Services() {
    return (
      <section id="services" className="container container__services">
        <Intro />
        <ServicesComp />
      </section>
    );
  }
export default Services;
