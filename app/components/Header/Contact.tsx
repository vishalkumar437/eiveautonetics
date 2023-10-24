
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import "./header.css"
function Contact (){
    return (
      <div className="contact">
        <a href="mailto:lormail@gmail.com">
          <AiFillMail />
          <span>help@eiveautonetics.com</span>
        </a>

        <a href="tel:+919830345551">
          <AiFillPhone />
          <span>+919830345551</span>
        </a>
      </div>
    );
  }

export default Contact;
