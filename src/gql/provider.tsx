import type { PropsWithChildren } from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import config from '@phx/config';
import { userVar } from '@phx/utils/storage';

import { errorLink } from './errorLink';

const cache = new InMemoryCache({});

const authLink = () =>
  setContext((_, { headers }) => {
    const res = userVar();

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: res.jwtToken,
      },
    };
  });

const httpLink = createHttpLink({
  uri: config.BASE_URL,
});

const link = authLink();

const client = new ApolloClient({
  link: from([errorLink, link, httpLink]),
  cache,
});

export function ApolloWrapper({ children }: PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
