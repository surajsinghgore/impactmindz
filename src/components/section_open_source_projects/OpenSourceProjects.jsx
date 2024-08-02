import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import openSourceProjectsData from "../../data/openSourceProjectsData";
import OpenSourceProjectItem from "../open_source_project_item/OpenSourceProjectItem";
import Button from "react-bootstrap/Button";

const OpenSourceProjects = () => {
  const renderedOpenSourceProjects = openSourceProjectsData?.map(
    (project, index) => {
      return (
        <Col lg={4} md={6} key={index}>
          <OpenSourceProjectItem project={project} />
        </Col>
      );
    }
  );
  return (
    <section
      className="open-source-projects sec-padding"
      id="open-source-projects"
    >
      <Container>
        <h2>Open Source Projects</h2>
        <Row>{renderedOpenSourceProjects}</Row>
        <div className="more-button text-center">
          <Button variant="primary" className="main-button">
            More Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OpenSourceProjects;
