import "./Logo.css";
import { HashLink } from "react-router-hash-link";

const Logo = () => {
  return (
    <HashLink to="#" className="logo">
      <span>&lt; </span>
      <span className="logo-name">Impactmindz</span>
      <span> /&gt;</span>
    </HashLink>
  );
};

export default Logo;
