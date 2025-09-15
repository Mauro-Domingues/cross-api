export class CreateDockerFile {
  public execute(): string {
    return `FROM node:lts AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:lts AS run

WORKDIR /app

COPY package*.json ./

RUN npm prune --omit=dev --legacy-peer-deps

COPY --from=build /app/dist ./dist

CMD ["sh", "-c", "node /app/dist/shared/typeorm/runMigrations.js && npm run start -- --bind 0.0.0.0"]
`;
  }
}
