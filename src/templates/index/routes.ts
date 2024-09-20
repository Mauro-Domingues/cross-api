export class CreateRouteIndex {
  public execute(): string {
    return `import { Router } ${'from'} 'express';
// import { guardRouter } ${'from'} './guardRouter';

const routes = Router();
// routes.use(guardRouter); // Use this before all routes to protect using jwt and set open routes/methods at guardRouter.ts

export { routes };
`;
  }
}
