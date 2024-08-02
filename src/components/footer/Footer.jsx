import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialLinks from "../social_links/SocialLinks";
import imageProfile from "../../assets/images/profile.png";

const Footer = () => {
  return (
    <footer className="sec-padding pb-0" id="contact">
      <Container>
        <Row>
          <Col md={9}>
            <h3>Reach Out to me!</h3>
            <h5 className="text-uppercase">
              Discuss a project or just want to say hi? My Inbox is open for
              all.
            </h5>
            <h4>
              "First Indian Google Code-In Finalist | Software Engineer @SadaPay
              | building refactornow.dev"
            </h4>
            <address>
              <FontAwesomeIcon icon={faLocationDot} />
              Chandigarh , India
            </address>
            <p>Open for opportunities: No</p>
            <SocialLinks />
          </Col>
          <Col md={3}>
            <div className="profile-pic">
              <img src={imageProfile} alt="Profile Picture" />
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <p>Made with ❤️ by Impactmindz Team</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
