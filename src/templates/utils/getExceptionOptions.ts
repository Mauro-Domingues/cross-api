export class CreateGetExceptionOptions {
  public execute(): string {
    return `import type { Params } fr\u006Fm 'express-unless';
import type { IExceptionDTO } fr\u006Fm '@dtos/IExceptionDTO';

function serializePath({
  allowRawRoute,
  allowParams,
  methods,
  url,
}: IExceptionDTO): Omit<IExceptionDTO, 'url'> & { url: RegExp } {
  const rawRoute = allowRawRoute ? '?' : '';
  const params = allowParams ? '/' : '';

  const optionalArgs = \`(\${params}.+)\${rawRoute}\`;

  return {
    url: new RegExp(\`^\${url}\${allowParams ? optionalArgs : ''}\`),
    methods,
  };
}

export function getExceptionOptions({
  paths,
}: {
  paths: Array<IExceptionDTO>;
}): Params {
  return { path: paths.map(serializePath) };
}
`;
  }
}
