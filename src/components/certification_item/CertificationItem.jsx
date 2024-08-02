import "./CertificationItem.css";

const CertificationItem = ({ item }) => {
  const renderedLinks = item.links?.map((link, index) => {
    return (
      <a key={index} href={link.url} className="link-button" target="_blank">
        {link.text}
      </a>
    );
  });
  return (
    <div className="certification">
      <img src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      {renderedLinks && (
        <div className="certification-links">{renderedLinks}</div>
      )}
    </div>
  );
};

export default CertificationItem;
