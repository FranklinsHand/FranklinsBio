module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("nav", function(data) {
    //use block style to make it all line up
    return `
    <nav>
      <a href="/index.html">Home</a> |
      <a href="/about.html">About</a> |
      <a href="blog/1.html">Blog<a>
    </nav>
    `
  });
};
