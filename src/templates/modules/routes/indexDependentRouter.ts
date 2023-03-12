import { IModuleNamesDTO } from 'index';

export class CreateIndexDependentRoute {
  private fatherNames: Pick<
    IModuleNamesDTO,
    'lowerModuleName' | 'routeModuleName'
  >;

  constructor(fatherNames: IModuleNamesDTO) {
    this.fatherNames = fatherNames;
  }

  public execute(): string {
    return `import ${this.fatherNames.lowerModuleName}Router from './${this.fatherNames.lowerModuleName}Router';
routes.use('/${this.fatherNames.routeModuleName}', ${this.fatherNames.lowerModuleName}Router);
`;
  }
}
