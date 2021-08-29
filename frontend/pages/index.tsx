import apolloClient from "../lib/apollo";

import articlesQuery from '../graphql/articles.gql';
import { ArticlesQuery } from '../graphql/types';

import Default  from '../templates/default';

import StartScreen from '../components/startScreen/startScreen';
import ProjectCarousel from '../components/projectCarousel/projectCarousel';
import ProjectList from '../components/projectList/projectList';
import ContactFormTeaser from '../components/contactFormTeaser/contactFormTeaser';

const Index = ({ data }: { data: ArticlesQuery } ) => {  
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


Index.getInitialProps = async () => {
  const { data }: { data: ArticlesQuery } = await apolloClient.query({
    query: articlesQuery
  });
  return {
    data
  };
};

export default Index;