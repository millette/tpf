"use strict"

// npm
const withOptimizedImages = require("next-optimized-images")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

module.exports = withOptimizedImages(
  withMDX({
    responsive: {
      sizes: [600, 1000, 2000],
      placeholder: true,
    },
    pageExtensions: ["js", "mdx"],
  })
)
