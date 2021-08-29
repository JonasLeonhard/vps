import apolloClient from "../lib/apollo";

import articlesQuery from '../graphql/articles.gql';
import { ArticlesQuery } from '../graphql/types';

import Default  from '../templates/default';

import ContactForm from '../components/contactForm/contactForm';

const Contact = ({ data }: { data: ArticlesQuery } ) => {  
  return (
    <Default title="Jonasleonhard.de" description="Jonas Leonhard Contact Page">
      <>
        contact Page...
        <ContactForm />
      </>
    </Default>
    )
}


Contact.getInitialProps = async () => {
  // Replace with about contact query
  const { data }: { data: ArticlesQuery } = await apolloClient.query({
    query: articlesQuery
  });
  return {
    data
  };
};

export default Contact;