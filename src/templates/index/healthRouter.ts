export class CreateHealthRouter {
  public execute(): string {
    return `import { Router, type Request, type Response } fr\om 'express';
import { baseValidator } fr\om '@shared/container/modules/validators/baseValidator';

const healthRouter = Router();

healthRouter.get(
  '/health',
  baseValidator(ctx => ({
    params: ctx.object({}),
    query: ctx.object({}),
    body: ctx.object({}),
  })),
  (_request: Request, response: Response): void => {
    response.sendStatus(204);
  },
);

export { healthRouter };
`;
  }
}
