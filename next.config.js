"use strict"

const prod = process.env.NODE_ENV === "production"

// npm
const withOptimizedImages = require("next-optimized-images")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

const assetPrefix = prod ? "/tpf/" : ""

module.exports = withOptimizedImages(
  withMDX({
    env: {
      BACKEND_URL: assetPrefix.slice(0, -1),
    },
    assetPrefix,
    optimizeImages: false,
    responsive: {
      sizes: [600, 1000, 1600],
    },
    pageExtensions: ["js", "mdx"],
  })
)
