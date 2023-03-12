export class CreateRoutes {
  public execute(): string {
    return `import { Router } from 'express';

const routes = Router();

export default routes;
`;
  }
}
