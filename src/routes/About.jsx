import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>О проекте: я сделал этот проект, потому что это мой проект</span>
    </div>
  );
}

export default About;