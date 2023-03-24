"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGitIgnore = void 0;
class CreateGitIgnore {
    execute() {
        return `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

/node_modules
/coverage
/.env
/dist
/tmp
`;
    }
}
exports.CreateGitIgnore = CreateGitIgnore;
