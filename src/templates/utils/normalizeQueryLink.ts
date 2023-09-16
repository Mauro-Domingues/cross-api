export class CreateNormalizeQueryLink {
  public execute(): string {
    return `export function normalizeQueryLink<T extends object>(
  baseUrl: string,
  data: T,
): string {
  const isType = (_key: string | keyof T): _key is keyof T => true;

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
