import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql", // API URL
  cache: new InMemoryCache(), // Caching for better performance
});

export default client;
