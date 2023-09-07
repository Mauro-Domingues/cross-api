export class CreateparseParam {
  public execute(): string {
    return `import { Request, Response, NextFunction } ${'from'} 'express';

export const parseParam = (
  request: Request,
  _response: Response,
  next: NextFunction,
): void => {
  if (request.query) {
    Object.keys(request.query).forEach(key => {
      if (request.method === 'GET' && ['page', 'limit'].includes(key)) {
        Object.assign(request.query, { [key]: Number(request.query[key]) });
      }
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
