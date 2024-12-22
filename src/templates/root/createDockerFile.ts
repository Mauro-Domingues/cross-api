export class CreateDockerFile {
  public execute(): string {
    return `# Build
FROM node:lts AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Run
FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev --legacy-peer-deps

COPY --from=build /app/dist ./dist

EXPOSE 3333

CMD ["npm", "run", "start"]
`;
  }
}
