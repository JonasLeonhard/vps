import apolloClient from "../../lib/apollo";

import articlesQuery from '../../graphql/articles.gql';
import { ArticlesQuery } from '../../graphql/types';

import Default  from '../../templates/default';

const Blog = ({ data }: { data: ArticlesQuery } ) => {  
  return (
    <Default title="Jonasleonhard.de" description="Jonas Leonhard Blog">
      <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            Blog currently under construction...
        </div>
      </>
    </Default>
    )
}


Blog.getInitialProps = async () => {
  // Replace with about page query
  const { data }: { data: ArticlesQuery } = await apolloClient.query({
    query: articlesQuery
  });
  return {
    data
  };
};

export default Blog;