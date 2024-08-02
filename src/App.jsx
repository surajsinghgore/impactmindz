import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import BigProjects from "./components/section_big_projects/BigProjects";
import Blogs from "./components/section_blogs/Blogs";
import Certifications from "./components/section_certifications/Certifications";
import Education from "./components/section_education/Education";
import Experiences from "./components/section_experiences/Experiences";
import OpenSourceProjects from "./components/section_open_source_projects/OpenSourceProjects";
import Proficiency from "./components/section_proficiency/Proficiency";
import WhatIDo from "./components/section_what_i_do/WhatIDo";

const App = () => {
  return (
    <div className="page-wrap">
      <Header />
      <Banner />
      <WhatIDo />
      <Proficiency />
      <Education />
      <Experiences />
      <OpenSourceProjects />
      <BigProjects />
      <Certifications />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
