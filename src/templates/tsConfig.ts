export default function createTsConfig(): string {
  return `{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": ".",
    "strict": true,
    "strictPropertyInitialization": false,
    "baseUrl": "./src",
    "allowJs": true,
    "paths": {
      "@modules/*": ["modules/*"],
      "@config/*": ["config/*"],
      "@shared/*": ["shared/*"],
      "@dtos/*": ["dtos/*"],
      "@utils": "./src/utils"
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
