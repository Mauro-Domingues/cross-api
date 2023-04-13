"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNormalizeQueryLink = void 0;
class CreateNormalizeQueryLink {
    execute() {
        return `export function normalizeQueryLink<T extends object>(
  baseUrl: string,
  data: T,
): string {
  const isType = (key: string | keyof T): key is keyof T => true;

  if (!data || Object.keys(data).length === 0) return baseUrl;

  const mappedQuery = Object.keys(data).reduce((acc, key, index) => {
    if (isType(acc) && data[acc]) {
      acc = \`\${acc}=\${data[acc]}&\`;
    } else if (isType(acc) && !data[acc] && index === 1) {
      acc = '';
    }

    if (isType(key) && data[key]) {
      acc += \`\${key}=\${data[key]}&\`;
    }

    return acc;
  });

  return new URL(
    \`\${baseUrl}\${
      mappedQuery.at(-1) === '&' ? \`?\${mappedQuery.slice(0, -1)}\` : mappedQuery
    }\`,
  ).href;
}
`;
    }
}
exports.CreateNormalizeQueryLink = CreateNormalizeQueryLink;
