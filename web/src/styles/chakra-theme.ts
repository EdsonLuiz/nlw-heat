import {extendTheme, theme as base} from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    "brandYellow": {
      "50": "#FFF9E5",
      "100": "#FFEFB8",
      "200": "#FFE58A",
      "300": "#FFDB5C",
      "400": "#FFD12E",
      "500": "#FFC600",
      "600": "#CC9F00",
      "700": "#997700",
      "800": "#664F00",
      "900": "#332800"
    }
  },
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