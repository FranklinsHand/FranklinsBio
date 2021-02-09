module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("head", function(data) {
    return `
  <head>
    <title>my title</title>
    <meta charset="UTF-8">
    <meta name="description" content="Personal site">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="Jalex">
    <meta name="application-name" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
    `
  });
};
