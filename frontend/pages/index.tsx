import apolloClient from "../lib/apollo";

import Default  from '../templates/default';

import StartScreen from '../components/startScreen/startScreen';
import ProjectCarousel from '../components/projectCarousel/projectCarousel';
import ProjectList from '../components/projectList/projectList';
import ContactFormTeaser from '../components/contactFormTeaser/contactFormTeaser';

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
    )
}

export default Index;