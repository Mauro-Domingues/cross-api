"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPrettierConfig = createPrettierConfig;
function createPrettierConfig() {
  return `module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
}
`;
}