export class CreateGuardIndex {
  public execute(): string {
    return `import { Router } fr\u006Fm 'express';
import passport fr\u006Fm 'passport';
import type { IExceptionDTO } fr\u006Fm '@dtos/IExceptionDTO';
import { ensureAuthenticated } fr\u006Fm '@middlewares/ensureAuthenticated';
import { getExceptionOptions } fr\u006Fm '@utils/getExceptionOptions';

const guardRouter = Router();

const paths: Array<IExceptionDTO> = [
  {
    // matches /health
    // keep this one
    url: '/health',
    methods: ['GET'],
  },
  {
    // matches /first-example/param
    url: '/second-example',
    methods: ['GET', 'PUT', 'PATCH', 'DELETE'],
    allowParams: true,
  },
  {
    // matches /first-example and /first-example/param
    url: '/last-example',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowParams: true,
    allowRawRoute: true,
  },
];

guardRouter.use(passport.initialize());
guardRouter.use(
  ensureAuthenticated('jwt').unless(getExceptionOptions({ paths })),
);

export { guardRouter };
`;
  }
}
