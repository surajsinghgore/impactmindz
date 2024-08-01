import "./BigProjectItem.css";

const BigProjectItem = ({ project }) => {
  return (
    <div className="big-project-item">
      <img src={project.image} alt="" />
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" className="link-button">
        Visit Website
      </a>
    </div>
  );
};

export default BigProjectItem;
