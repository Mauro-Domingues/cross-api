export class CreateGuard {
    execute() {
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
      url: /^\\/uploads\\/.+/, // expose public folder feature, let this route opened
      methods: ['GET'],
    },
    {
      url: /^\\/api-docs([\\/?].*)?/, // expose public doc feature, let this route opened
      methods: ['GET'],
    },
    {
      url: /^\\/first-example\\/.+/,
      methods: ['GET', 'POST'],
    },
    {
      url: /^\\/second-example\\/.*/,
      methods: ['GET', 'POST', 'PUT'],
    },
    {
      url: /^\\/third-example([\\/?].*)/,
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
