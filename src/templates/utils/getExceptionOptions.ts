export class CreateGetExceptionOptions {
  public execute(): string {
    return `import { IExceptionDTO } ${'from'} '@dtos/IExceptionDTO';
import { Params } ${'from'} 'express-unless';

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
