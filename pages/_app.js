/** @jsx jsx */

// npm
import { jsx, Flex, Box, Styled, Button, ThemeProvider } from "theme-ui"
import Link from "next/link"
import { Sidenav } from "@theme-ui/sidenav"

// <Links pathname={"/page2"} components={{ wrapper: Pagination }} />

// self
import theme from "../theme.js"
import Cols from "../components/cols.js"
import Links from "../components/links.mdx"
import Footer from "../components/footer.mdx"
import Pager from "../components/pager.js"

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
  Pager,
  Flex,
  Box,
  Button,
  a: ({ href, children }) => {
    // console.log("HREF-PAGER", href)

    return href.indexOf("://") === -1 ? (
      <Link href={href} as={process.env.BACKEND_URL + href} passHref>
        <Styled.a>{children}</Styled.a>
      </Link>
    ) : (
      <Styled.a target="_blank" rel="noopener noreferrer" href={href}>
        <sup>⧉</sup>&nbsp;{children}
      </Styled.a>
    )
  },
}

//  sx={{width:"100%"}}

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider components={mdComponents} theme={theme}>
      <Flex mx={3}>
        <Box sx={{ minWidth: "15rem" }} px={3} mx={3}>
          <Cols />
          <Sidenav>
            <Links />
          </Sidenav>
        </Box>
        <Box px={3} mx={3}>
          <Component {...pageProps} />
        </Box>
      </Flex>
      <Footer />
    </ThemeProvider>
  )
}
