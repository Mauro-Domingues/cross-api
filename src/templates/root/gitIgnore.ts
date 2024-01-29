export class CreateGitIgnore {
  public execute(): string {
    return `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

/src/assets/.well-known/jwks.json
/src/assets/errors.log
/tsconfig.tsbuildinfo
/node_modules
/src/keys
/coverage
/.env
/dist
/tmp
`;
  }
}
