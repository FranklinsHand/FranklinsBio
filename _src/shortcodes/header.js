module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("header", function(data) {
    return `
  <header>
    <svg> <!-- svg placeholder for logo --> </svg>
    <h1>Franklinshand</h1>
    ${this.nav()}
  </header>
    `
  });
};
