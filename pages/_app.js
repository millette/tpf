// npm
import { Styled, Button, ThemeProvider } from "theme-ui"
// import { ColorMode } from "@theme-ui/color-modes"
import Link from "next/link"

// self
import theme from "../theme.js"
import Cols from "../components/cols.js"

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

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider components={mdComponents} theme={theme}>
      <Cols />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
