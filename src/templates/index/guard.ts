export class CreateGuard {
  public execute(): string {
    return `import { Router } from 'express';
import { ensureAuthenticated } from '@middlewares/EnsureAuthenticated';
import { decodeJwt } from '@middlewares/DecodeJwt';
import { IExceptionDTO } from '@dtos/IExceptionDTO';

const guardRouter = Router();

const exceptions: IExceptionDTO = {
  path: [
    {
      url: /^\\/keys/, // expose public key feature, let this route opened
      methods: ['GET'],
    },
    {
      url: /^\\/second-example\\/.+/,
      methods: ['GET', 'POST'],
    },
    {
      url: /^\\/third-example\\/.*/,
      methods: ['GET', 'POST', 'PUT'],
    },
    {
      url: /^\\/fourth-example([\\/?].*)/,
      methods: ['GET', 'POST', 'PUT', 'PATCH'],
    },
    {
      url: /^\\/last-example([\\/?].*)?/,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    },
  ],
};

guardRouter.use(ensureAuthenticated.unless(exceptions));
guardRouter.use(decodeJwt);

export { guardRouter };
`;
  }
}
