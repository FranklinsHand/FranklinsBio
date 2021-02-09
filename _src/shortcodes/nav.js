module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("nav", function(data) {
    //use block style to make it all line up
    return `
    <nav>
      <a href="/home/">Home</a> |
      <a href="/about/">About</a> |
      <a href="/garden/">Digital Garden</a> |
      <a href="/possum/">possums???</a>
    </nav>
    `
  });
};
