export class CreateDecodeJwt {
  public execute(): string {
    return `import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default async function decodeJwt(
  request: Request,
  _response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization;

  const basePath = path.resolve(
    __dirname,
    '..',
    'assets',
    'keys',
    'private.pem',
  );

  if (!authHeader) {
    return next();
  }

  const [, token] = authHeader.split(' ');
  const secret = fs.readFileSync(basePath, 'ascii');
  const decoded = verify(token, secret);
  const { sub } = decoded as ITokenPayload;

  request.user = {
    id: sub,
  };

  return next();
}
`;
  }
}
