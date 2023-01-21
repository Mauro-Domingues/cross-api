"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGitIgnore;
function createGitIgnore() {
  return `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

/node_modules
/coverage
/.env
/dist
/tmp
`;
}