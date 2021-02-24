module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("blogCard", function(data) {
    console.log(data)
    return `
    <article>
      <h2>${data.name}</h2>
      <p>${data.date}</p>
    </article>
    `
  });
};
