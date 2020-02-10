// npm
import { Styled, Button, ThemeProvider } from "theme-ui"
import theme from "@theme-ui/preset-polaris"
import Link from "next/link"

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

export default ({ Component, pageProps }) => (
  <ThemeProvider components={mdComponents} theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)
