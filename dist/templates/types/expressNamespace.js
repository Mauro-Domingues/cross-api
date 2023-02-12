"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExpressNamespace = createExpressNamespace;
function createExpressNamespace() {
  return `declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
`;
}