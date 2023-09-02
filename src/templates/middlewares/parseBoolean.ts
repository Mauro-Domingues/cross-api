export class CreateParseBoolean {
  public execute(): string {
    return `import { Request, Response, NextFunction } ${'from'} 'express';

export const parseBoolean = (
  request: Request,
  _response: Response,
  next: NextFunction,
): void => {
  if (request.query) {
    Object.keys(request.query).forEach(key => {
      if (request.query[key] === 'true') {
        Object.assign(request.query, { [key]: true });
      }
      if (request.query[key] === 'false') {
        Object.assign(request.query, { [key]: false });
      }
    });
  }

  return next();
};
`;
  }
}
