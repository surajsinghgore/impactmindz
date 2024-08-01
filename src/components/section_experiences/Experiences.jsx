import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import experienceData from "../../data/experienceData";
import ExperienceItem from "../experience_item/ExperienceItem";

const Experiences = () => {
  const renderedExperienceItems = experienceData?.map((item, index) => {
    return (
      <Col md={4} key={index}>
        <ExperienceItem item={item} />
      </Col>
    );
  });
  return (
    <section className="experiences sec-padding">
      <Container>
        <h2>Experiences</h2>
        <Row>{renderedExperienceItems}</Row>
      </Container>
    </section>
  );
};

export default Experiences;
