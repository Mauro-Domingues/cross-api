export class CreateIHandleDataDTO {
  public execute(): string {
    return `import type { IHandleDTO } fr\u006Fm './IHandleDTO.js';

export type IHandleDataDTO<T extends IHandleDTO> =
  InstanceType<T> extends { handle(args: { data: infer Data }): unknown }
    ? Data
    : never;
`;
  }
}
