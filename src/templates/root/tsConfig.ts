export class CreateTsConfig {
  public execute(): string {
    return `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "node",
    "lib": ["ES2022"],
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "baseUrl": "./src",
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
    "strict": true,
    "strictPropertyInitialization": false,
    "noImplicitAny": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "incremental": true,
    "assumeChangesOnlyAffectDirectDependencies": true,
    "importsNotUsedAsValues": "remove",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "allowJs": true,
    "useDefineForClassFields": true,
    "removeComments": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"],
  "ts-node": { "files": true },
  "tsc-alias": {
    "resolveFullPaths": true
  }
}
`;
  }
}
