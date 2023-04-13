"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExpressNamespace = void 0;
class CreateExpressNamespace {
    execute() {
        return `declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
`;
    }
}
exports.CreateExpressNamespace = CreateExpressNamespace;
