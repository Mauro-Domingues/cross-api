export class CreateSwcConfig {
  public execute(): string {
    return `{
  "$schema": "https://swc.rs/schema.json",
  "isModule": true,
  "exclude": ["src/@types", ".*\\\\.spec\\\\.ts$"],
  "minify": true,
  "module": {
    "type": "commonjs",
    "strict": true,
    "strictMode": true,
    "lazy": false,
    "noInterop": false,
    "resolveFully": true
  },
  "jsc": {
    "target": "es2022",
    "baseUrl": "./src",
    "keepClassNames": false,
    "externalHelpers": false,
    "loose": true,
    "experimental": {
      "keepImportAssertions": true,
      "plugins": [["swc_mut_cjs_exports", {}]]
    },
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
    "parser": {
      "syntax": "typescript",
      "tsx": false,
      "decorators": true,
      "dynamicImport": true
    },
    "minify": {
      "compress": {
        "unused": true
      }
    },
    "transform": {
      "legacyDecorator": true,
      "decoratorMetadata": true,
      "useDefineForClassFields": true
    }
  }
}
`;
  }
}
