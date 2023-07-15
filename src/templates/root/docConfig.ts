export class CreateDocConfig {
  public execute(): string {
    return `import { generateSpec } from 'tsoa';
import { resolve } from 'path';

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
    target: 9,
    lib: ['ES2022'],
    module: 1,
    outDir: './dist',
    rootDir: '.',
    strict: true,
    strictPropertyInitialization: false,
    baseUrl: './src',
    allowJs: true,
    paths: {
      '@modules/*': ['modules/*'],
      '@middlewares/*': ['middlewares/*'],
      '@config/*': ['config/*'],
      '@shared/*': ['shared/*'],
      '@dtos/*': ['dtos/*'],
      '@utils/*': ['utils/*'],
    },
    esModuleInterop: true,
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
    resolveJsonModule: true,
  },
  ['node_modules', 'dist', '**/*.spec.ts'],
);
`;
  }
}
