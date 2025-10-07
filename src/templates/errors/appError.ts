export class CreateAppError {
  public execute(): string {
    return `import { ICodeDTO } fr\om '@dtos/ICodeDTO';

export class AppError extends Error {
  public constructor(
    public readonly messageCode: ICodeDTO,
    public readonly message: string,
    public readonly code: number = 400,
  ) {
    super();
  }
}
`;
  }
}
