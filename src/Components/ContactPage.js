import "../../css/contact.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact">
      <img 
        src="/basketball.jpg" 
        alt="picture of basketball net"
        className="basketball" 
      />

      <div className="contact-container">
        <h2>
        The ball is in your court. <br/> Interested in working together? Get in touch with me!
        </h2>

        <div className="contacts">
          <div>
          <a href="mailto:sebatbekri@gmail.com">
            <FaEnvelope />
          </a>
          <p>sebatbekri@gmail.com</p>
          </div>

          <div>
          <a href="https://codepen.io/sebatmohamed" target="_blank">
          <FaCodepen />
          </a>
          <p>Coding challenges!</p>
          </div>

          <div>
          <a href="https://github.com/sebatmohamed" target="_blank">
            <FaGithub />
          </a>
          <p>See my work</p>
          </div>

          <div>
          <a href="https://www.linkedin.com/in/sebatm/" target="_blank">
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