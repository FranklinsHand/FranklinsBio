class Base {
  data() {
    return {
      //permalink: "/base.html"
    }
  }
  render(data) {

    return `
<!DOCTYPE html>
<html>
  ${this.head()}
  ${this.header()}
  <body>
    ${data.content}
  </body>
  ${this.footer()}
</html>
    `;
  }
}

module.exports = Base
