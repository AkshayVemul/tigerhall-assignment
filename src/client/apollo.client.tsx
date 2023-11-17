import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client'
import React from 'react'

const apolloClient = new ApolloClient({
  uri: 'https://api.tigerhall.net/v2/',
  cache: new InMemoryCache(),
})

export const ApolloProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null
}) => {
  return <Provider client={apolloClient} children={children}></Provider>
}
