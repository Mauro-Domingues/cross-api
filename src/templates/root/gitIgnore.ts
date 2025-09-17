export class CreateGitIgnore {
  public execute(): string {
    return `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

/src/assets/.well-known/jwks.json
/src/assets/errors.log
/*.tsbuildinfo
/node_modules
/yarn.lock
/src/keys
/coverage
/.cross
/.swc
/.env
/dist
/tmp
`;
  }
}
