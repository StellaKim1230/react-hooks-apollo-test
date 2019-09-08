import React from 'react';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const link = createHttpLink({
  uri: 'https://spacexdata.herokuapp.com/graphql'
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

