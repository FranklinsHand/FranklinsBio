
 exports.data = {
    layout: "Base",
    pagination: {
      data: "possum",
      size: 1,
      alias: "possum",
    },
//      eleventyComputed: { currently broken in 11ty. outputs url /possum/#/name. may be fixed in the future.
//        permalink: data => `/possum/${data.possum.name}.html`
//      },
    permalink: data => `/possum/${data.possum.name}.html`
  }


exports.render = function(data) {
  return `
      <main>
        <p>${data.possum.name}</p>
        <p>${data.possum.age}<p>
      </main>
  `;
}
