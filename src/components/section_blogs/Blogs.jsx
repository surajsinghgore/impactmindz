import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import blogsData from "../../data/blogsData";
import BlogItem from "../blog_item/BlogItem";

const Blogs = () => {
  const renderedBlogs = blogsData?.map((blog, index) => {
    return (
      <Col lg={4} md={6} key={index}>
        <BlogItem blog={blog} />
      </Col>
    );
  });
  return (
    <section className="blogs sec-padding" id="blogs">
      <Container>
        <h2>Blogs</h2>
        <h5 className="text-uppercase">
          With Love for Developing cool stuff, I love to write and teach others
          what I have learnt.
        </h5>
        <Row>{renderedBlogs}</Row>
      </Container>
    </section>
  );
};

export default Blogs;
