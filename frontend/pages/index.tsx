import { withApollo } from '../lib/apollo';

import articlesQuery from '../graphql/articles.gql';
import { ArticlesQuery } from '../graphql/types';

import Default  from './templates/default';

import Text from './components/text/text';
import Container from './components/container/container';


const Index = ({ data }: { data: ArticlesQuery } ) => {  
  return (
    <Default title="Jonasleonhard.de" description="Jonas Leonhard Index Page">
      <Text>
      <h1>Lora Font</h1>
      rendered index.tsx {data.articles.map(el => {
        return el.title
      })}
      <Container>
        testcontainer
      </Container>
      </Text>
    </Default>
    )
}


Index.getInitialProps = async ({ apolloClient }) => {
  const { data }: { data: ArticlesQuery } = await apolloClient.query({
    query: articlesQuery
  });
  return {
    data
  };
};

export default withApollo()(Index);