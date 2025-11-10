export class CreateparseParam {
  public execute(): string {
    return `import type { Request, Response, NextFunction } fr\om 'express';

export const parseParam = (
  request: Request,
  _response: Response,
  next: NextFunction,
): void => {
  if (request.query) {
    Object.keys(request.query).forEach(key => {
      if (!Number.isNaN(Number(request.query[key]))) {
        Object.assign(request.query, { [key]: Number(request.query[key]) });
        return;
      }
      if (request.query[key] === 'true') {
        Object.assign(request.query, { [key]: true });
        return;
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
