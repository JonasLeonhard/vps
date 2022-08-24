import React from "react";
import Default from "../templates/default";

import StartScreen from "components/organisms/startScreen/startScreen";
import ProjectCarousel from "components/organisms/projectCarousel/projectCarousel";
import ProjectList from "components/organisms/projectList/projectList";
import ContactFormTeaser from "components/organisms/contactFormTeaser/contactFormTeaser";

const Index = ({ data }) => {
  return (
    <Default title="Jonasleonhard.de" description="Jonas Leonhard Index Page">
      <>
        <StartScreen />
        <ProjectCarousel />
        <ProjectList />
        <ContactFormTeaser />
      </>
    </Default>
  );
};

export default Index;
