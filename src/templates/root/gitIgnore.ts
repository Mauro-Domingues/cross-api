export class CreateGitIgnore {
  public execute(): string {
    return `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

/src/assets/errors.log
/node_modules
/coverage
/.env
/dist
/tmp
`;
  }
}
