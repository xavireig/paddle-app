import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './common/config/apollo-client';

import Home from './screens/Home';
import MainContainer from './navigation/MainContainer';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <MainContainer />
    </ApolloProvider>
  );
};

export default App;