import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateIndexDependentRoute {
  public constructor(
    private readonly fatherNames: Pick<IModuleNameDTO, 'lowerModuleName'>,
  ) {}

  public execute(): string {
    return `import { ${this.fatherNames.lowerModuleName}Router } ${'from'} './${
      this.fatherNames.lowerModuleName
    }Router';
routes.use(${this.fatherNames.lowerModuleName}Router);
`;
  }
}
