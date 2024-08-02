import "./Certifications.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CertificationItem from "../certification_item/CertificationItem";
import certificationsData from "../../data/certificationsData";
import iconTrophy from "../../assets/icons/trophy.png";

const Certifications = () => {
  const renderedCertificationItems = certificationsData?.map((item, index) => {
    return (
      <Col lg={4} md={6} key={index}>
        <CertificationItem item={item} />
      </Col>
    );
  });
  return (
    <section className="certifications sec-padding" id="certifications">
      <Container>
        <h2>
          Achievements And Certifications{" "}
          <img src={iconTrophy} alt="Icon Trophy" />
        </h2>
        <h5 className="text-uppercase">
          Achievements, Certifications, Award Letters and Some Cool Stuff that I
          have done !
        </h5>
        <Row>{renderedCertificationItems}</Row>
      </Container>
    </section>
  );
};

export default Certifications;
