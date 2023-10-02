export class CreateAppError {
  public execute(): string {
    return `export class AppError extends Error {
  constructor(
    public readonly message_code: messageCode,
    public readonly message: string,
    public readonly code: number = 400,
  ) {
    super();
  }
}
`;
  }
}
