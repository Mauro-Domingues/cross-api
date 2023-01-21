export default function createEsLintIgnore(): string {
  return `/*.js
node_modules
dist
src/@types
src/utils/mappers
`;
}
