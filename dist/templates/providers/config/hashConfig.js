"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHashConfig = void 0;
class CreateHashConfig {
    execute() {
        return `interface IHashConfig {
  secret: number;
}

export default {
  secret: Number(process.env.HASH_SECRET_KEY) || 10,
} as IHashConfig;
`;
    }
}
exports.CreateHashConfig = CreateHashConfig;
