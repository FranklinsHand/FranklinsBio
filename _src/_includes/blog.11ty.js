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

  function pageNav(page) {
    console.log(page)
    return `
    ${data.pagination.href.first !== page.url
      ? `<a href="${data.pagination.href.first}">First<a>`
      : `<a href="">First<a>`
      }
    ${data.pagination.href.previous !== null
      ? `<a href="${data.pagination.href.previous}">Previous<a>`
      : `<a href="">Previous<a>`}
    ${data.pagination.href.next !== null
      ? `<a href="${data.pagination.href.next}">Next<a>`
      : `<a href="">Next<a>`}
    ${data.pagination.href.last !== page.url
      ? `<a href="${data.pagination.href.last}">Last<a>`
      : `<a href="">Last<a>`
      }
      `
  }

  console.log(this)
  return `
      ${pageNav(this.page)}
      <main>
        ${data.post.map(post => `
          <article>
            <a href="/blog/${post.name}.html">
            <h2>${post.name}</h2>
            <p>${(post.date)}<p>
            <p>${(post.description)}<p>
            </a>
          </article>
          `).join('')}
      </main>
      ${pageNav(this.page)}
    `;
}
