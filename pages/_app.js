// npm
import { Flex, Box, Styled, Button, ThemeProvider } from "theme-ui"
import Link from "next/link"
import { Sidenav } from "@theme-ui/sidenav"

// self
import theme from "../theme.js"
import Cols from "../components/cols.js"
import Links from "../components/links.mdx"

/*
const wrapper = ({ children, ...props }) => (
  <Flex mx={3}>
    <Box>
      {children}
    </Box>
  </Flex>
)
*/

const mdComponents = {
  // wrapper,
  Button,
  a: ({ href, children }) =>
    href.indexOf("://") === -1 ? (
      <Link href={href} as={process.env.BACKEND_URL + href} passHref>
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
      <Flex mx={3}>
        <Box>
          <Cols />
          <Sidenav>
            <Links />
          </Sidenav>
        </Box>
        <Box>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ThemeProvider>
  )
}
