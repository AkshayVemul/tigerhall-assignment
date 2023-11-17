import { ChakraProvider } from '@chakra-ui/react'
import { appTheme } from '@ui/theme'
import { AppHeader } from '@components/app-header.component'

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <AppHeader />
    </ChakraProvider>
  )
}

export default App
