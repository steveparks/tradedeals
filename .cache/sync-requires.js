// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/steveparks/Documents/GitHub/tradedeals/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/steveparks/Documents/GitHub/tradedeals/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/steveparks/Documents/GitHub/tradedeals/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/steveparks/Documents/GitHub/tradedeals/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/steveparks/Documents/GitHub/tradedeals/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/steveparks/Documents/GitHub/tradedeals/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/steveparks/Documents/GitHub/tradedeals/.cache/json/layout-index.json"),
  "404.json": require("/Users/steveparks/Documents/GitHub/tradedeals/.cache/json/404.json"),
  "layout-index.json": require("/Users/steveparks/Documents/GitHub/tradedeals/.cache/json/layout-index.json"),
  "index.json": require("/Users/steveparks/Documents/GitHub/tradedeals/.cache/json/index.json"),
  "layout-index.json": require("/Users/steveparks/Documents/GitHub/tradedeals/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/steveparks/Documents/GitHub/tradedeals/.cache/json/404-html.json")
}