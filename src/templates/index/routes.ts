export class CreateRouteIndex {
  public execute(): string {
    return `import { Router } fr\u006Fm 'express';
// import { guardRouter } fr\u006Fm './guardRouter';
import { healthRouter } fr\u006Fm './healthRouter';

const routes = Router();

// routes.use(guardRouter); // Use this before all routes to protect using jwt and set open routes/methods at guardRouter.ts
routes.use(healthRouter);

export { routes };
`;
  }
}
