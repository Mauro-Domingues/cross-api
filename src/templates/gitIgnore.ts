export default function createGitIgnore(): string {
  return `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

/node_modules
/coverage
/.env
/dist
/tmp
`;
}
