import '../../css/footer.css';

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


function Footer() {
    return(
        <div className="footer">

            <div>

            <a href="https://github.com/sebatmohamed">
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/sebatm/">
                <FaLinkedinIn/>
            </a>
            <a href="mailto:sebatbekri@gmail.com">
                <FaEnvelope/>
            </a>
            
            </div>

        </div>
    )
}


export default Footer