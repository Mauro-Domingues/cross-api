"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrettierConfig;
function createPrettierConfig() {
  return `module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
}
`;
}