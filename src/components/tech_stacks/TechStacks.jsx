import "./TechStacks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faSwift } from "@fortawesome/free-brands-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";

const TechStacks = () => {
  return (
    <div className="tech-stacks">
      <span>
        <FontAwesomeIcon icon={faHtml5} />
        html-5
      </span>
      <span>
        <FontAwesomeIcon icon={faCss3Alt} />
        css3
      </span>
      <span>
        <FontAwesomeIcon icon={faSass} />
        sass
      </span>
      <span>
        <FontAwesomeIcon icon={faJs} />
        JavaScript
      </span>
      <span>
        <FontAwesomeIcon icon={faReact} />
        reactjs
      </span>
      <span>
        <FontAwesomeIcon icon={faNodeJs} />
        nodejs
      </span>
      <span>
        <FontAwesomeIcon icon={faSwift} />
        swift
      </span>
      <span>
        <FontAwesomeIcon icon={faNpm} />
        npm
      </span>
      <span>
        <FontAwesomeIcon icon={faDatabase} />
        sql-database
      </span>
      <span>
        <FontAwesomeIcon icon={faAws} />
        aws
      </span>
      <span>
        <FontAwesomeIcon icon={faFireFlameCurved} />
        firebase
      </span>
      <span>
        <FontAwesomeIcon icon={faPython} />
        python
      </span>
      <span>
        <FontAwesomeIcon icon={faDocker} />
        docker
      </span>
    </div>
  );
};

export default TechStacks;
