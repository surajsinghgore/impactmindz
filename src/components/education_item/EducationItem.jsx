import "./EducationItem.css";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const EducationItem = ({ item }) => {
  const renderedAchievementDetailList = item.achievementDetailList?.map(
    (listItem, index) => {
      return <li key={index}>{listItem}</li>;
    }
  );
  return (
    <div className="education-item">
      {/* <Container> */}
      <Row>
        <Col md={2}>
          <div className="e-i-image">
            <img src={item.image} alt={item.title} />
          </div>
        </Col>
        <Col md={10}>
          <div className="e-i-details">
            <h3>{item.title}</h3>
            <h4>{item.subTitle}</h4>
            <p>{item.batch}</p>
            <h5>{item.achievement}</h5>
            <ul>{renderedAchievementDetailList}</ul>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
};

export default EducationItem;
