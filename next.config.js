const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [],
    hastPlugins: []
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
