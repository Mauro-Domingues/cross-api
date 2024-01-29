export class CreateBabelConfig {
  public execute(): string {
    return `module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        "@config": "./src/config",
        "@dtos": "./src/dtos",
        "@jobs": "./src/jobs",
        "@middlewares": "./src/middlewares",
        "@modules": "./src/modules",
        "@shared": "./src/shared",
        "@utils": "./src/utils"
      }
    }],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }]
  ],
}
`;
  }
}
