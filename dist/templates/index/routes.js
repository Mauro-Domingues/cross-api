"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRoutes = void 0;
class CreateRoutes {
  execute() {
    return `import { Router } from 'express';

const routes = Router();

export default routes;
`;
  }
}
exports.CreateRoutes = CreateRoutes;