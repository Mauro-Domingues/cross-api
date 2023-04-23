export class CreatePrettierConfig {
    execute() {
        return `module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
}
`;
    }
}
