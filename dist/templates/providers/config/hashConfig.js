"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateHashConfig = void 0;
class CreateHashConfig {
  execute() {
    return `interface IHashConfigDTO {
  secret: number;
}

export const hashConfig: IHashConfigDTO = {
  secret: Number(process.env.HASH_SECRET_KEY) || 10,
};
`;
  }
}
exports.CreateHashConfig = CreateHashConfig;