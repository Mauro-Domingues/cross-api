export class CreateHealthRouter {
  public execute(): string {
    return `import { Router } ${'from'} 'express';
import { healthRouter } ${'from'} './healthRouter';
// import { guardRouter } ${'from'} './guardRouter';

const routes = Router();

// routes.use(guardRouter); // Use this before all routes to protect using jwt and set open routes/methods at guardRouter.ts
routes.use(healthRouter);

export { routes };
`;
  }
}
