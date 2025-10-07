import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateModuleDTO {
  public constructor(
    private readonly names: Pick<IModuleNameDTO, 'upperModuleName'>,
  ) {}

  public execute(): string {
    return `import { ${this.names.upperModuleName} } fr\om '../entities/${this.names.upperModuleName}';

export interface I${this.names.upperModuleName}DTO extends Partial<${this.names.upperModuleName}> {}
`;
  }
}
