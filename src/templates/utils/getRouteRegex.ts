export class CreateGetRouteRegex {
  public execute(): string {
    return `export function getRouteRegex({
  allowRawRoute,
  allowQueries,
  allowParams,
  url,
}: {
  allowRawRoute?: true;
  allowQueries?: true;
  allowParams?: true;
  url: \`/\${string}\`;
}): RegExp {
  const includeOptionalArgs = !!allowParams || !!allowQueries;
  const rawRoute = allowRawRoute ? '?' : '';
  const queries = allowQueries ? '?' : '';
  const params = allowParams ? '/' : '';

  const optionalArgs = \`([\${params}\${queries}].+)\${rawRoute}\`;

  return new RegExp(\`^\${url}\${includeOptionalArgs ? optionalArgs : ''}\`);
}
`;
  }
}
