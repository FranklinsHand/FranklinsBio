
// Import modules to include
const example = require('./example.js')
const head = require('./head.js')
const footer = require('./footer.js')
const header = require('./header.js')
const nav = require('./nav.js')
const blogCard = require('./blogCard')


module.exports = function(eleventyConfig) {
  example(eleventyConfig)
  head(eleventyConfig)
  footer(eleventyConfig)
  header(eleventyConfig)
  nav(eleventyConfig)
  blogCard(eleventyConfig)
}
