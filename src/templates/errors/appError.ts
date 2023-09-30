export class CreateAppError {
  public execute(): string {
    return `export class AppError {
  constructor(
    public readonly message_code: messageCode,
    public readonly message: string,
    public readonly code: number = 400,
  ) {}
}
`;
  }
}
