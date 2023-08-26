export class CreateDecodeJwt {
  public execute(): string {
    return `import { Request, Response, NextFunction } ${'from'} 'express';
import { verify } ${'from'} 'jsonwebtoken';
import { resolve } ${'from'} 'path';
import { readFileSync } ${'from'} 'fs';

interface ITokenPayloadDTO {
  iat: number;
  exp: number;
  sub: string;
}

export const decodeJwt = (
  request: Request,
  _response: Response,
  next: NextFunction,
): void => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return next();
  }

  const basePath = resolve(__dirname, '..', 'assets', 'keys', 'private.pem');
  const [, token] = authHeader.split(' ');
  const secret = readFileSync(basePath, 'ascii');
  const decoded = verify(token, secret);
  const { sub } = decoded as ITokenPayloadDTO;

  request.user = {
    id: sub,
  };

  return next();
};
`;
  }
}
