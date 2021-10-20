import {extendTheme, theme as base} from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `Roboto, ${base.fonts.heading}`,
    body: `Roboto, ${base.fonts.body}`
  },
  styles: {
    global: {
      body: {
        bg: base.colors.gray[900],
        color: base.colors.gray[200]
      }
    }
  }
})