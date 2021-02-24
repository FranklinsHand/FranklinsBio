exports.data = {
    layout: "Base",
    pagination: {
      data: "posts",
      size: 2,
      alias: "post",
    },
//      eleventyComputed: { currently broken in 11ty. outputs url /possum/#/name. may be fixed in the future.
//        permalink: data => `/possum/${data.possum.name}.html`
//      },
    permalink: data => `/blog/${data.pagination.pageNumber + 1}.html`
  }


exports.render = function(data) {
  console.log(data.pagination.href)
  return `
    <a href="${data.pagination.href.first}">First<a>
    ${data.pagination.href.previous !== null
      ? `<a href="${data.pagination.href.previous}">${data.pagination.pageNumber - 1}<a>`
      : ``}
    ${data.pagination.href.next !== null
      ? `<a href="${data.pagination.href.next}">${data.pagination.pageNumber + 1}<a>`
      : ``}
      <a href="${data.pagination.href.last}">Last<a>
      <main>
        ${data.post.map(post => `
          <article>
            <a href="/blog/${post.name}.html">${(post.name)}</a>
            <p>${(post.date)}<p>
            <p>${(post.description)}<p>
          </article>
          `).join('')}
      </main>
      ${data.pagination.href.previous !== null
        ? `<a href="${data.pagination.href.previous}">${data.pagination.pageNumber - 1}<a>`
        : `First`}
      ${data.pagination.href.next !== null
        ? `<a href="${data.pagination.href.next}">${data.pagination.pageNumber + 1}<a>`
        : `Last`}
    `;
}
