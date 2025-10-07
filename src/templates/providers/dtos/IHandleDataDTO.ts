export class CreateIHandleDataDTO {
  public execute(): string {
    return `import { IHandleDTO } fr\om './IHandleDTO';

export type IHandleDataDTO<T extends IHandleDTO> = Parameters<
  InstanceType<T>['handle']
>[0]['data'];
`;
  }
}
