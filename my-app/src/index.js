import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import i18n from './i18n';  // Import i18n
import { I18nextProvider } from 'react-i18next';
import { ApolloProvider, InMemoryCache } from '@apollo/client';  // Import Apollo Client

// Create Apollo Client instance
import { ApolloClient } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root for React 18
root.render(
  <ApolloProvider client={client}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </ApolloProvider>
);
