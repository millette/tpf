"use strict"

// npm
const withOptimizedImages = require("next-optimized-images")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

module.exports = withOptimizedImages(
  withMDX({
    optimizeImages: false,
    responsive: {
      sizes: [600, 1000, 2000],
    },
    pageExtensions: ["js", "mdx"],
  })
)
