export default function createPrettierConfig(): string {
  return `module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
}
`;
}
