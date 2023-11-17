import { Box, ChakraProvider } from '@chakra-ui/react'
import { appTheme } from '@ui/theme'
import { ApolloProvider } from '@client/apollo.client'
import { ContentCard } from '@components/content-card/content-card.component'

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <ApolloProvider>
        <Box p={4}>
          <ContentCard
            authorName="Jane Doe"
            authorCompany="Subway APAC"
            title="COMMUNICATING AS A LEADER"
            description="Peak Performance: Going From Good to Great with Simon Taudel"
            imageUrl="https://bit.ly/naruto-sage"
            completed={30}
            watchedMinutes={20}
          />
        </Box>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default App
