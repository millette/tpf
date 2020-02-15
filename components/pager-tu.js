/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import Link from "next/link"

// import { jsx, css, ThemeProvider } from 'theme-ui'
// import { MDXProvider } from '@mdx-js/react'
// import React, { useState } from 'react'
// import { Global } from '@emotion/core'
// import merge from 'deepmerge'

const flattenLinks = (children) =>
  React.Children.toArray(children).reduce((acc, child) => {
    if (child.props && child.props.mdxType === "a") {
      return [...acc, child]
    }
    if (!child.props || !child.props.children) return acc
    return React.Children.toArray([
      ...acc,
      ...flattenLinks(child.props.children),
    ])
  }, [])

const removeSlash = (str) => (str.length > 1 ? str.replace(/\/$/, "") : str)

const PaginationLink = ({
  label,
  children,
  mdxType,
  originalType,
  parentName,
  href,
  ...props
}) => (
  <Link href={href} as={process.env.BACKEND_URL + href} passHref>
    <Styled.a
      {...props}
      sx={{
        fontSize: 1,
        color: "inherit",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      <div>{label}</div>
      <div
        sx={{
          fontSize: 3,
        }}
      >
        {children}
      </div>
    </Styled.a>
  </Link>
)

export const Pagination = ({ pathname = "", children, ...props }) => {
  const links = flattenLinks(children)
  const index = links.findIndex(
    (link) => link.props.href === removeSlash(pathname)
  )
  const hasPagination = index > -1
  const previous = links[index - 1]
  const next = links[index + 1]

  console.log("PREVIOUS", previous)
  console.log("NEXT", next)

  return (
    <div
      {...props}
      sx={{
        display: "flex",
      }}
    >
      {hasPagination && previous && (
        <PaginationLink {...previous.props} label="Précédent:" />
      )}
      <div sx={{ mx: "auto" }} />
      {hasPagination && next && (
        <PaginationLink {...next.props} label="Suivant:" />
      )}
    </div>
  )
}
