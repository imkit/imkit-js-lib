let IMKit;
if (
  "undefined" != typeof process &&
  process.versions &&
  process.versions.node
) {
  IMKit = require("./lib/imkit-js-api-v3.node.js");
} else {
  IMKit = require("./lib/imkit-js-api-v3.web.js");
}
module.exports = IMKit;
