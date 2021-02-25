exports.data = {
    layout: "Base",
    pagination: {
      data: "pages",
      size: 1,
      alias: "webPage", //IMPORTANT: you can't use 'page'
    },
  //      eleventyComputed: { currently broken in 11ty. outputs url /possum/#/name. may be fixed in the future.
  //        permalink: data => `/possum/${data.possum.name}.html`
  //      },
    permalink: data => `/${data.webPage.name}.html`
  }


exports.render = function(data) {
  const marked = require("marked");
  const markedUP = marked(data.webPage.content);
  return `
      <main>
        ${markedUP}
      </main>
  `;
}
