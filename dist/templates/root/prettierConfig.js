"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePrettierConfig = void 0;
class CreatePrettierConfig {
  execute() {
    return `module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
}
`;
  }
}
exports.CreatePrettierConfig = CreatePrettierConfig;