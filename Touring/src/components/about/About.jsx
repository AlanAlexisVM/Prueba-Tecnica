import React from "react";
import AboutKDD from "./AboutKDD";
import AboutPerform from "./AboutPerform";
import AboutTech from "./AboutTech";
import "../../styles/About.css";

const About = () => {
  return (
    <>
      <AboutPerform />
      <AboutKDD />
      <AboutTech />
    </>
  );
};

export default About;
