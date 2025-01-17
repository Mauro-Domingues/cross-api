export class CreateGetExceptionOptions {
  public execute(): string {
    return `import { IExceptionDTO } from '@dtos/IExceptionDTO';
import { expressjwt } from 'express-jwt';

function serializePath({
  allowRawRoute,
  allowQueries,
  allowParams,
  methods,
  url,
}: IExceptionDTO): Omit<IExceptionDTO, 'url'> & { url: RegExp } {
  const includeOptionalArgs = !!allowParams || !!allowQueries;
  const rawRoute = allowRawRoute ? '?' : '';
  const queries = allowQueries ? '?' : '';
  const params = allowParams ? '/' : '';

  const optionalArgs = \`([\${params}\${queries}].+)\${rawRoute}\`;

  return {
    url: new RegExp(\`^\${url}\${includeOptionalArgs ? optionalArgs : ''}\`),
    methods,
  };
}

export function getExceptionOptions({
  paths,
}: {
  paths: Array<IExceptionDTO>;
}): Parameters<ReturnType<typeof expressjwt>['unless']>[0] {
  return {
    path: paths.map(serializePath),
  };
}
`;
  }
}
