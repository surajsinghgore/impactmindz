import "./ProficiencyBars.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProficiencyBars = () => {
  return (
    <div className="proficiency-bars">
      <div className="p-bar">
        <h6>Frontend/Design</h6>
        <ProgressBar now={90} />
      </div>
      <div className="p-bar">
        <h6>Backend</h6>
        <ProgressBar now={70} />
      </div>
      <div className="p-bar">
        <h6>Programming</h6>
        <ProgressBar now={60} />
      </div>
    </div>
  );
};

export default ProficiencyBars;
