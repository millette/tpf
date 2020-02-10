// npm
import { Styled, Button, ThemeProvider, InitializeColorMode } from "theme-ui"
import Link from "next/link"

// self
import theme from "../theme.js"

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

// <InitializeColorMode />

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider components={mdComponents} theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
