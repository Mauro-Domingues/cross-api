export class CreateAppError {
  public execute(): string {
    return `import { ICodeDTO } ${'from'} '@dtos/ICodeDTO';

export class AppError extends Error {
  constructor(
    public readonly message_code: ICodeDTO,
    public readonly message: string,
    public readonly code: number = 400,
  ) {
    super();
  }
}
`;
  }
}
