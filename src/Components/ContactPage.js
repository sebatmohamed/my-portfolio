import "../../css/contact.css";
import BackgroundImage from "./BackgroundImage";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact">
      <BackgroundImage />

      <div className="contact-container">
        <h2>
          Interested in working together? <br/> Get in touch with me to get the ball
          rolling!
        </h2>

        <div className="contacts">
          <div>
          <a href="mailto:sebatbekri@gmail.com">
            <FaEnvelope />
          </a>
          <p>Email: sebatbekri@gmail.com</p>
          </div>

          <div>
          <a href="https://codepen.io/sebatmohamed">
          <FaCodepen />
          </a>
          <p>See my coding challenges!</p>
          </div>

          <div>
          <a href="https://github.com/sebatmohamed">
            <FaGithub />
          </a>
          <p>Check out my code</p>
          </div>

          <div>
          <a href="https://www.linkedin.com/in/sebatm/">
            <FaLinkedinIn />
          </a>
          <p>Connect with me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
