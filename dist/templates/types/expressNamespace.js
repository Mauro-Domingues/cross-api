"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createExpressNamespace;
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