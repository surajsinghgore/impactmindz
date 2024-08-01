import "./SocialLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="#" target="_blank" className="icon-github">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="#" target="_blank" className="icon-linkedin">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="#" target="_blank" className="icon-gmail">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="#" target="_blank" className="icon-gitlab">
        <FontAwesomeIcon icon={faGitlab} />
      </a>
      <a href="#" target="_blank" className="icon-facebook">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" target="_blank" className="icon-medium">
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a href="#" target="_blank" className="icon-stackoverflow">
        <FontAwesomeIcon icon={faStackOverflow} />
      </a>
    </div>
  );
};

export default SocialLinks;
