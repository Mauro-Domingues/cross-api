export class CreateDecimaAdjust {
  public execute(): string {
    return `export function roundDecimal(v: number, exp?: number) {
  if (typeof exp === 'undefined' || Number.isNaN(v) || exp % 1 !== 0) {
    return NaN;
  }

  const negative = Math.sign(v) === -1;
  const value = negative ? v * -1 : v;

  if (!\`\${value}\`.includes('e')) {
    const result = +\`\${Math.round(+\`\${value}e+\${exp}\`)}e-\${exp}\`;
    return negative ? result * -1 : result;
  }

  const arr = \`\${value}\`.split('e');
  const sig = +arr[1] + exp > 0 ? '+' : '';
  const result = +\`\${Math.round(+\`\${+arr[0]}e\${sig}\${+arr[1] + exp}\`)}e-\${exp}\`;

  return negative ? result * -1 : result;
}
`;
  }
}
