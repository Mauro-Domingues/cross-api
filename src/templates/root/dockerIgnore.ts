export class CreateDockerIgnore {
  public execute(): string {
    return `node_modules
tmp
coverage
.cross
.env
.env.template
.dockerignore
.git
.gitignore
.editorconfig
.eslintignore
.eslintrc.json
.prettier*
jest.config.ts
doc.config.ts
Dockerfile
docker-compose.yml
README.md
*.tsbuildinfo
`;
  }
}
