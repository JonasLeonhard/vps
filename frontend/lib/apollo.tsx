
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri:  typeof window === 'undefined' ? `${process.env.NEXT_PUBLIC_SERVERSIDE_APOLLO_CMS_URL}/graphql` : `${process.env.NEXT_PUBLIC_CLIENT_APOLLO_CMS_URL}/graphql`,
    cache: new InMemoryCache(),
    credentials: 'same-origin'
});

export default apolloClient;
