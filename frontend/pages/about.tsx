import apolloClient from "lib/apollo";

import articlesQuery from 'graphql/articles.gql';
import { ArticlesQuery } from 'graphql/types';

import Default  from 'templates/default';

import BannerTicker from 'components/organisms/bannerTicker/bannerTicker';

const About = ({ data }: { data: ArticlesQuery } ) => {  
  return (
    <Default title="Jonasleonhard.de" description="Jonas Leonhard About Page">
      <>
      about Page...
       <BannerTicker />
      </>
    </Default>
    )
}


About.getInitialProps = async () => {
  // Replace with about page query
  const { data }: { data: ArticlesQuery } = await apolloClient.query({
    query: articlesQuery
  });
  return {
    data
  };
};

export default About;