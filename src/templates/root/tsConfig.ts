export class CreateTsConfig {
  public execute(): string {
    return `{
  "compilerOptions": {
    "target": "es6",
    "lib": ["ES2022"],
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": ".",
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
      "@shared/*": ["shared/*"],
      "@utils/*": ["utils/*"]
    },
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,   
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"],
  "ts-node": {"files": true}
}`;
  }
}
