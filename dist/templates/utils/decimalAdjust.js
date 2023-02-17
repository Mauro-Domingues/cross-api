"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDecimaAdjust = createDecimaAdjust;
function createDecimaAdjust() {
  return `export function roundDecimal(v: number, exp?: number) {
  if (typeof exp === 'undefined') {
    return NaN;
  }

  if (Number.isNaN(v) || !(exp % 1 === 0)) {
    return NaN;
  }

  let value = v;

  let negative = false;

  let result;

  if (Math.sign(value) === -1) {
    value = v * -1;
    negative = true;
  }

  if (!\`\${value}\`.includes('e')) {
    result = +\`\${Math.round(+\`\${value}e+\${exp}\`)}e-\${exp}\`;

    return negative ? result * -1 : result;
  }
  const arr = \`\${value}\`.split('e');
  let sig = '';
  if (+arr[1] + exp > 0) {
    sig = '+';
  }

  result = +\`\${Math.round(+\`\${+arr[0]}e\${sig}\${+arr[1] + exp}\`)}e-\${exp}\`;

  return negative ? result * -1 : result;
}
`;
}