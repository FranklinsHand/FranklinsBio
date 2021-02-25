

const fs = require("fs");

const src = require("./_src/")

const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");

module.exports =  function(eleventyConfig) {

  //exposes eleventyConfig function to the 'includes folder'
  src(eleventyConfig)

  eleventyConfig.addPlugin(pluginTailwindCSS, {
    src: "_src/styles/index.css",
    dest: ".",
    minify: true,
    configFile: "tailwind.config.js",
  });

  eleventyConfig.setBrowserSyncConfig({//code to make 404 page work. I have no idea how it works tho lol so don't touch it
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('_site/404.html');
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: ".",
      includes: "",
      layouts: "_layouts",
      output: "_site",
      data: "_data"
    },
    templateFormats: [
      'html',
      'md',
      '11ty.js'
    ],
  };

}
