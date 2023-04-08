"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAppError = void 0;
class CreateAppError {
  execute() {
    return `export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
`;
  }
}
exports.CreateAppError = CreateAppError;