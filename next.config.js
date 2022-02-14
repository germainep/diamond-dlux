const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withSourceMaps = require('@zeit/next-source-maps')
const withMDX = require('@next/mdx')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      use: [],
    })

    return config
  },
}

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withMDX],
  [withSourceMaps],
])
