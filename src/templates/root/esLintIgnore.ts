export class CreateEsLintIgnore {
  public execute(): string {
    return `/*.js
node_modules
dist
src/@types
`;
  }
}
