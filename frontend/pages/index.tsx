import { withApollo } from '../lib/apollo';

import articlesQuery from '../graphql/articles.gql';
import { ArticlesQuery } from '../graphql/types';

import Text from './components/text/text';

const Index = ({ data }: { data: ArticlesQuery } ) => {  
  return (
    <Text>
    rendered index.tsx {data.articles.map(el => {
      return el.title
    })}
    </Text>
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