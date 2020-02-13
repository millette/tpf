"use strict"

const prod = process.env.NODE_ENV === "production"

// npm
const withOptimizedImages = require("next-optimized-images")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

module.exports = withOptimizedImages(
  withMDX({
    assetPrefix: prod ? "/tpf/" : "",
    optimizeImages: false,
    responsive: {
      sizes: [600, 1000, 1600],
    },
    pageExtensions: ["js", "mdx"],
  })
)
