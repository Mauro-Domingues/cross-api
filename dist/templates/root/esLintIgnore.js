export class CreateEsLintIgnore {
    execute() {
        return `/*.js
node_modules
dist
src/@types
src/utils/mappers
`;
    }
}
