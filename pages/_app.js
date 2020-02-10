/** @jsx jsx */

// npm
import { jsx, Styled, Button, ThemeProvider } from "theme-ui"
// import { ColorModeProvider } from '@theme-ui/color-modes'
import theme1 from "@theme-ui/preset-polaris"
import Link from "next/link"

// self
// import Cols from "../components/cols.js"

const mdComponents = {
  Button,
  a: ({ href, children }) =>
    href.indexOf("://") === -1 ? (
      <Link href={href} passHref>
        <Styled.a>{children}</Styled.a>
      </Link>
    ) : (
      <Styled.a target="_blank" rel="noopener noreferrer" href={href}>
        <sup>⧉</sup>&nbsp;{children}
      </Styled.a>
    ),
}

const theme = {
  ...theme1,
  // useColorSchemeMediaQuery: true,
  buttons: {
    secondary: {
      cursor: "pointer",
      fontWeight: "bold",
      color: "white",
      bg: "red",
      "&:hover": {
        bg: "dark",
      },
    },
  },
}

/*
theme1.useColorSchemeMediaQuery = true

// theme1.styles

if (theme1.styles) {
  theme1.styles.buttons = {
    primary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        bg: 'dark',
    },

    secondary: {
      cursor: "pointer",
      fontWeight: 'bold',
      color: 'white',
      bg: 'secondary',
      '&:hover': {
        bg: 'dark',
    },
  }
}
}
}

console.log("THEME1", Object.keys(theme1))
console.log("THEME1-styles", theme1.styles && Object.keys(theme1.styles))
*/

/*
const theme = merge(theme1, {
  useColorSchemeMediaQuery: true,
})

console.log("THEME", Object.keys(theme))
*/

/*


      <ColorModeProvider>
        <Cols />
      </ColorModeProvider>

*/

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider components={mdComponents} theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
