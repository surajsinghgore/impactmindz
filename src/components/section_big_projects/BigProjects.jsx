import "./BigProjects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BigProjectItem from "../big_project_item/BigProjectItem";
import bigProjectsData from "../../data/bigProjectsData";

const BigProjects = () => {
  const renderedBigProjects = bigProjectsData?.map((project, index) => {
    return (
      <Col md={6} key={index}>
        <BigProjectItem project={project} />
      </Col>
    );
  });
  return (
    <section className="big-projects sec-padding">
      <Container>
        <h2>Big Projects</h2>
        <h4>Some startups and companies that i helped to create their tech</h4>
        <Row>{renderedBigProjects}</Row>
      </Container>
    </section>
  );
};

export default BigProjects;
