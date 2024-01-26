export class CreateTsConfig {
  public execute(): string {
    return `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "node",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "strictPropertyInitialization": false,
    "baseUrl": "./src",
    "allowJs": true,
    "paths": {
      "@config/*": ["config/*"],
      "@dtos/*": ["dtos/*"],
      "@jobs/*": ["jobs/*"],
      "@middlewares/*": ["middlewares/*"],
      "@modules/*": ["modules/*"],
      "@routes/*": ["routes/*"],
      "@shared/*": ["shared/*"],
      "@utils/*": ["utils/*"]
    },
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "noImplicitAny": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "**/*.spec.ts"],
  "ts-node": { "files": true }
}
`;
  }
}
