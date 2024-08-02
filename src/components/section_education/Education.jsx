import Container from "react-bootstrap/Container";
import EducationItem from "../education_item/EducationItem";
import educationData from "../../data/educationData";

const Education = () => {
  const renderedEducationItems = educationData?.map((item, index) => {
    return <EducationItem key={index} item={item} />;
  });
  return (
    <section className="education sec-padding">
      <Container>
        <h2>Education</h2>
        {renderedEducationItems}
      </Container>
    </section>
  );
};

export default Education;
