import { extendTheme } from '@chakra-ui/react'
import { colorsTokens } from './colors'
import { fontSizeTokens, fontTokens } from './fonts'

export const appTheme = extendTheme({
  colors: {
    ...colorsTokens,
  },
  fonts: {
    ...fontTokens,
  },
  fontSizes: {
    ...fontSizeTokens,
  },
  semanticTokens: {
    colors: {
      primary: 'tigerOrange.600',
      secondary: {
        sunny: 'soSunny.600',
        yellow: 'kindaYellow.600',
        teal: 'teal.600',
        grey: 'grey.200',
        black: 'black',
        white: 'white',
      },
      function: {
        success: 'green.500',
        error: 'red.500',
      },
    },
  },

  config: {
    cssVarPrefix: 'tigerhall',
  },
})
