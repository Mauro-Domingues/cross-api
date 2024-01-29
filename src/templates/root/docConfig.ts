export class CreateDocConfig {
  public execute(): string {
    return `import { generateSpec } ${'from'} 'tsoa';
import { resolve } ${'from'} 'node:path';
import { compilerOptions } ${'from'} './tsconfig.json';

generateSpec(
  {
    entryFile: resolve(__dirname, 'src', 'shared', 'server.ts'),
    outputDirectory: resolve(__dirname, 'src'),
    specVersion: 3,
    version: '1.0.0',
    name: 'Awesome API',
    description: 'An awesome API created using cross-api',
    schemes: ['http', 'https'],
    host: 'localhost:3333',
    basePath: '/',
    rootSecurity: [{ guardRouter: [] }],
    useTitleTagsForInlineObjects: true,
    operationIdTemplate: '{{titleCase controllerName}}',
    noImplicitAdditionalProperties: 'silently-remove-extras',
    specMerging: 'deepmerge',
    spec: {
      servers: [
        {
          url: 'https://your-production-domain.com',
          description: 'Api Production',
        },
      ],
      consumes: ['application/json', 'multipart/form-data'],
      produces: ['application/json'],
    },
    securityDefinitions: {
      guardRouter: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'jwt',
        description: "Don't need to incude 'Bearer' keyword.",
      },
    },
    contact: {
      email: 'example@mail.com',
      name: 'Your Name Here',
      url: 'https://example.com.br',
    },
  },
  {
    ...compilerOptions,
    module: 1,
    target: 9,
    moduleResolution: 2,
    importsNotUsedAsValues: 0,
  },
  ['node_modules', 'dist', '**/*.spec.ts'],
);
`;
  }
}
