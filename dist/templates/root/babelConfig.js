export class CreateBabelConfig {
    execute() {
        return `module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        "@dtos": "./src/dtos",
        "@config": "./src/config",
        "@modules": "./src/modules",
        "@middlewares": "./src/middlewares",
        "@shared": "./src/shared",
        "@utils": "./src/utils"
      }
    }],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', {'legacy': true}],
    ['@babel/plugin-proposal-class-properties', {'loose': true}]
  ],
}
`;
    }
}
