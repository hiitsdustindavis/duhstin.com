
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/casualuser/Documents/git/duhstin.com/src/pages/404.js")),
  "component---src-pages-cv-js": preferDefault(require("/Users/casualuser/Documents/git/duhstin.com/src/pages/cv.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/casualuser/Documents/git/duhstin.com/src/pages/index.js"))
}

