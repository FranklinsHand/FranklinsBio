module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("head", function(data) {
    return `
  <head>
    <title>FranklinsHand ${this.page.fileSlug}</title>
    <meta charset="UTF-8">
    <meta name="description" content="Personal site">
    <meta name="keywords" content="HTML, CSS, JavaScript, FranklinsHand, 11ty, Web Development, blog">
    <meta name="author" content="Jalex">
    <meta name="application-name" content="FranklinsBio">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="/_src/styles/index.css" rel="stylesheet">
  </head>
    `
  });
};
