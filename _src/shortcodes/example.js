module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("module", function(data) {
    return `
    <p>example<p>
    `
  });
};
