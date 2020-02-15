/** @jsx jsx */
// npm
// import { jsx, Styled } from 'theme-ui'
import { jsx } from "theme-ui"
// import { Pagination } from '@theme-ui/sidenav'
import { useRouter } from "next/router"
// import Link from "next/link"
// import { Location } from '@reach/router'

// self
import { Pagination } from "./pager-tu.js"
import Links from "./portfolio-links.mdx"

const wrapper = (props) => {
  console.log("PAGINATION", Object.keys(props))
  console.log("PAGINATION-pn", props.pathname)
  console.log("PAGINATION-chld", Object.keys(props.children))
  console.log("PAGINATION-chld-props", Object.keys(props.children.props))
  console.log("PAGINATION-comps", Object.keys(props.components))
  return Pagination(props)
}

const components = {
  wrapper,
  /*
  a: ({ href, children }) => {
    console.log("HREF-PAGER", href)
    return href.indexOf("://") === -1 ? (
      <Link href={href} as={process.env.BACKEND_URL + href} passHref>
        <Styled.a>{children}</Styled.a>
      </Link>
    ) : (
      <Styled.a target="_blank" rel="noopener noreferrer" href={href}>
        <sup>⧉</sup>&nbsp;{children}
      </Styled.a>
    )
  }
  */
}

/*


      components={{
        wrapper: Pagination,
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




      }}



*/

export default (props) => {
  const router = useRouter()
  return <Links pathname={router.pathname} components={components} />
}
