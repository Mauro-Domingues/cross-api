export class CreateDecimaAdjust {
  public execute(): string {
    return `export function decimalAdjust(value: number, exponent: number): number {
  if (
    typeof exponent === 'undefined' ||
    Number.isNaN(value) ||
    exponent % 1 !== 0
  ) {
    return NaN;
  }

  const isNegative = Math.sign(value) === -1;
  const absoluteValue = isNegative ? value * -1 : value;

  if (!\`\${absoluteValue}\`.includes('e')) {
    const adjustedString = \`\${absoluteValue}e+\${exponent}\`;
    const adjustedValue = +\`\${Math.round(+adjustedString)}e-\${exponent}\`;
    return isNegative ? adjustedValue * -1 : adjustedValue;
  }

  const [base, exp] = \`\${absoluteValue}\`.split('e');
  const sign = +exp + exponent > 0 ? '+' : '';
  const exponentiatedString = \`\${+base}e\${sign}\${+exp + exponent}\`;
  const adjustedValue = +\`\${Math.round(+exponentiatedString)}e-\${exponent}\`;

  return isNegative ? adjustedValue * -1 : adjustedValue;
}
`;
  }
}
