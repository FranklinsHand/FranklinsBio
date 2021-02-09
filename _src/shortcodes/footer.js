module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("footer", function(data) {
    return `
    <footer>
      <p><a href="">Author: Jalex</a></p>
      <p>built with:<p>
      <p><a href="www.11ty.dev">eleventy</a></p>
      <p><a href="www.netlify.com">Netlify</a></p>
      <p>and Love</p>
      <p>compyright ${new Date().getFullYear()}<p>
    </footer>
    `
  });
};
