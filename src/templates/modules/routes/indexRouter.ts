import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateIndexRoute {
  public constructor(
    private readonly names: Pick<IModuleNameDTO, 'lowerModuleName'>,
  ) {}

  public execute(): string {
    return `import { ${this.names.lowerModuleName}Router } ${'from'} './${
      this.names.lowerModuleName
    }Router';
routes.use(${this.names.lowerModuleName}Router);
`;
  }
}
