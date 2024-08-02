import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import experienceData from "../../data/experienceData";
import ExperienceItem from "../experience_item/ExperienceItem";

const Experiences = () => {
  const renderedExperienceItems = experienceData?.map((item, index) => {
    return (
      <Col lg={4} md={6} key={index}>
        <ExperienceItem item={item} />
      </Col>
    );
  });
  return (
    <section className="experiences sec-padding" id="experiences">
      <Container>
        <h2>Experiences</h2>
        <Row>{renderedExperienceItems}</Row>
      </Container>
    </section>
  );
};

export default Experiences;
