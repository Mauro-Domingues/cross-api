export class CreateNormalizeQueryLink {
  public execute(): string {
    return `export function normalizeQueryLink<T extends object>(
  baseUrl: string,
  data: T,
): string {
  const assertType = (_key: string | keyof T): _key is keyof T => true;

  const mappedQuery = Object.keys(data ?? {}).reduce<string>((acc, key) => {
    if (assertType(key) && data[key]) {
      acc += \`\${key}=\${data[key]}&\`;
    }
    return acc;
  }, '');

  return new URL(
    baseUrl.concat(
      mappedQuery.endsWith('&') ? \`?\${mappedQuery.slice(0, -1)}\` : mappedQuery,
    ),
  ).href;
}
`;
  }
}
