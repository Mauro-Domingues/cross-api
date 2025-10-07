export class CreateRouteIndex {
  public execute(): string {
    return `import { Router } fr\om 'express';
import { healthRouter } fr\om './healthRouter';
// import { guardRouter } fr\om './guardRouter';

const routes = Router();

// routes.use(guardRouter); // Use this before all routes to protect using jwt and set open routes/methods at guardRouter.ts
routes.use(healthRouter);

export { routes };
`;
  }
}
