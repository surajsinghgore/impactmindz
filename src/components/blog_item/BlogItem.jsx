import "./BlogItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const BlogItem = ({ blog }) => {
  return (
    <a href={blog.url} className="blog" target="_blank">
      <span className="circle"></span>
      <FontAwesomeIcon icon={faArrowRightLong} />
      <h4>{blog.title}</h4>
      <p>{blog.description}</p>
    </a>
  );
};

export default BlogItem;
