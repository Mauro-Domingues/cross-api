export class CreatePrettierConfig {
  public execute(): string {
    return `module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
};
`;
  }
}
