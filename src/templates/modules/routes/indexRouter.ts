import { IModuleNamesDTO } from 'index';

export class CreateIndexRoute {
  private names: Pick<IModuleNamesDTO, 'lowerModuleName' | 'routeModuleName'>;

  constructor(names: IModuleNamesDTO) {
    this.names = names;
  }

  public execute(): string {
    return `import ${this.names.lowerModuleName}Router from './${this.names.lowerModuleName}Router';
routes.use('/${this.names.routeModuleName}', ${this.names.lowerModuleName}Router);
`;
  }
}
