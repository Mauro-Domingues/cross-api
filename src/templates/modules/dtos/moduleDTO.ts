import { IModuleNamesDTO } from 'index';

export class CreateModuleDTO {
  private names: Pick<IModuleNamesDTO, 'upperModuleName'>;

  constructor(names: IModuleNamesDTO) {
    this.names = names;
  }

  public execute(): string {
    return `export default interface I${this.names.upperModuleName}DTO {
  name: string;
  description: string;
}
`;
  }
}
