export class CreateGuardIndex {
  public execute(): string {
    return `import passport ${'from'} 'passport';
import { Router } ${'from'} 'express';
import { ensureAuthenticated } ${'from'} '@middlewares/ensureAuthenticated';
import { IExceptionDTO } ${'from'} '@dtos/IExceptionDTO';
import { getExceptionOptions } ${'from'} '@utils/getExceptionOptions';

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
