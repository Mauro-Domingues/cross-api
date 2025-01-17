export class CreateGuardIndex {
  public execute(): string {
    return `import { Router } ${'from'} 'express';
import { ensureAuthenticated } ${'from'} '@middlewares/ensureAuthenticated';
import { IExceptionDTO } ${'from'} '@dtos/IExceptionDTO';
import { getExceptionOptions } ${'from'} '@utils/getExceptionOptions';

const guardRouter = Router();

const paths: Array<IExceptionDTO> = [
  {
    url: '/first-example',
    methods: ['GET', 'PUT', 'DELETE'],
    allowParams: true,
  },
  {
    url: '/second-example',
    methods: ['GET'],
    allowQueries: true,
  },
  {
    url: '/third-example',
    methods: ['GET', 'POST', 'PUT', 'PATCH'],
    allowParams: true,
    allowQueries: true,
  },
  {
    url: '/last-example',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowParams: true,
    allowQueries: true,
    allowRawRoute: true,
  },
];

guardRouter.use(ensureAuthenticated.unless(getExceptionOptions({ paths })));

export { guardRouter };
`;
  }
}
