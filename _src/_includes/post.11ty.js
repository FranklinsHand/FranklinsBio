
 exports.data = {
    layout: "Base",
    pagination: {
      data: "posts",
      size: 1,
      alias: "post",
    },
//      eleventyComputed: { currently broken in 11ty. outputs url /possum/#/name. may be fixed in the future.
//        permalink: data => `/possum/${data.possum.name}.html`
//      },
    permalink: data => `/blog/${data.post.name}.html`
  }


exports.render = function(data) {
  const marked = require("marked");
  const markedUP = marked(data.post.content);
  return `
      <main>
        <h2>${data.post.name}</h2>
        <h4>${data.post.date}<h4>
        <p>${markedUP}</p>
      </main>
  `;
}
