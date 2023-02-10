"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createHashConfig;
function createHashConfig() {
  return `interface IHashConfig {
  secret: string | number;
}

export default {
  secret: Number(process.env.HASH_SECRET_KEY) || 10,
} as IHashConfig;
`;
}