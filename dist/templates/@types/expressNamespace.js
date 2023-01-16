"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createExpressNamespace;
function createExpressNamespace() {
  return `declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: {
      id: string;
    };
  }
}
`;
}