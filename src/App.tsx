import { ChakraProvider } from '@chakra-ui/react'
import { appTheme } from '@ui/theme'
import { ApolloProvider } from '@client/apollo.client'
import { PodcastSearch } from '@components/podcast-search/podcast-search.component'

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <ApolloProvider>
        <PodcastSearch />
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default App
