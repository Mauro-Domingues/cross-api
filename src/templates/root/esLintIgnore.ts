export default function createEsLintIgnore(): string {
  return `/*.js
node_modules
dist
src/@global
src/utils/mappers
`;
}
