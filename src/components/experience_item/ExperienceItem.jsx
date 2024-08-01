import "./ExperienceItem.css";

const ExperienceItem = ({ item }) => {
  const renderedKeyPoints = item.keyPoints?.map((keyPoint, index) => {
    return <li key={index}>{keyPoint}</li>;
  });
  return (
    <div className="experience-item">
      <div
        className="experience-banner"
        style={{ backgroundColor: item.themeColor }}
      >
        <h4>{item.companyName}</h4>
        <img src={item.image} alt={item.companyName} />
      </div>
      <div className="experience-details">
        <h3>{item.designation}</h3>
        <h5>{item.experience}</h5>
        <p>{item.description}</p>
        <ul>{renderedKeyPoints}</ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
