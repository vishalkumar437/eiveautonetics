
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import "./header.css"
function Contact (){
    return (
      <div className="contact">
        <a href="mailto:lormail@gmail.com">
          <AiFillMail />
          <span>eive.autonetics@easywaytolearn.com</span>
        </a>

        <a href="tel:+918789658374">
          <AiFillPhone />
          <span>+918789658374</span>
        </a>
      </div>
    );
  }

export default Contact;
