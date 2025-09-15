export class CreateHealthRouter {
  public execute(): string {
    return `import { Router, Request, Response } ${'from'} 'express';
import { celebrate, Segments, Joi } ${'from'} 'celebrate';

const healthRouter = Router();

healthRouter.get(
  '/health',
  celebrate({
    [Segments.PARAMS]: Joi.object({}),
    [Segments.QUERY]: Joi.object({}),
    [Segments.BODY]: Joi.object({}),
  }),
  (_request: Request, response: Response): void => {
    response.sendStatus(204);
  },
);

export { healthRouter };
`;
  }
}
