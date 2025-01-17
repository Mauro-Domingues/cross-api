export class CreateGuardIndex {
  public execute(): string {
    return `import { Router } ${'from'} 'express';
import { ensureAuthenticated } ${'from'} '@middlewares/ensureAuthenticated';
import { IExceptionDTO } ${'from'} '@dtos/IExceptionDTO';
import { getRouteRegex } ${'from'} '@utils/getRouteRegex';

const guardRouter = Router();

const exceptions: IExceptionDTO = {
  path: [
    {
      url: getRouteRegex({ url: '/jwks' }),
      methods: ['GET'], // expose public key feature, let this route opened
    },
    {
      url: getRouteRegex({ url: '/uploads', allowParams: true }),
      methods: ['GET'], // expose public folder feature, let this route opened
    },
    {
      url: getRouteRegex({
        url: '/doc',
        allowParams: true,
        allowRawRoute: true,
      }),
      methods: ['GET'], // expose public doc feature, let this route opened
    },
    {
      url: getRouteRegex({ url: '/first-example', allowParams: true }),
      methods: ['GET', 'PUT', 'DELETE'],
    },
    {
      url: getRouteRegex({ url: '/second-example', allowQueries: true }),
      methods: ['GET'],
    },
    {
      url: getRouteRegex({
        url: '/third-example',
        allowParams: true,
        allowQueries: true,
      }),
      methods: ['GET', 'POST', 'PUT', 'PATCH'],
    },
    {
      url: getRouteRegex({
        url: '/last-example',
        allowParams: true,
        allowQueries: true,
        allowRawRoute: true,
      }),
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    },
  ],
};

guardRouter.use(ensureAuthenticated.unless(exceptions));

export { guardRouter };
`;
  }
}
