import { Box, ChakraProvider, Heading, Text } from '@chakra-ui/react'
import { appTheme } from '@ui/theme'

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <Box bg="primary">
        <Heading fontSize={'10xl'}>ViteSetup</Heading>
        <Text>Welcome</Text>
      </Box>
    </ChakraProvider>
  )
}

export default App
