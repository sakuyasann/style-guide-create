import { extendTheme } from "@chakra-ui/react"

const fonts = {
  body: "'Manrope', sans-serif",
  heading: "'Manrope', sans-serif",
}

const styles = {
  global: {
    body: {
      color: "#4A5568",
      letterSpacing: ".1em"
    }
  }
}

const customTheme = extendTheme({fonts, styles})

export default customTheme