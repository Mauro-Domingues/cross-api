export class CreateRouteIndex {
  public execute(): string {
    return `import { Router } fr\om 'express';
// import { guardRouter } fr\om './guardRouter';
import { healthRouter } fr\om './healthRouter';

const routes = Router();

// routes.use(guardRouter); // Use this before all routes to protect using jwt and set open routes/methods at guardRouter.ts
routes.use(healthRouter);

export { routes };
`;
  }
}
