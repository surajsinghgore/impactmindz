import "./OpenSourceProjectItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const OpenSourceProjectItem = ({ project }) => {
  return (
    <div className="open-source-project-item">
      <h3>
        <FontAwesomeIcon icon={faBook} />
        {project.title}
      </h3>
      <p>{project.description}</p>
      <div className="o-s-p-i-details">
        <div className="language">
          <span style={{ backgroundColor: project.languageThemeColor }}></span>
          {project.language}
        </div>
        <div>
          <FontAwesomeIcon icon={faCodeFork} />
          {project.forks}
        </div>
        <div>
          <FontAwesomeIcon icon={faStar} />
          {project.stars}
        </div>
        <div className="project-size">{project.size}</div>
      </div>
    </div>
  );
};

export default OpenSourceProjectItem;
