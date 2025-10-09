import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { BaseTemplateModule } from '@templates/modules/base';

export class ShowSpecService extends BaseTemplateModule {
  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'routeModuleName'
    >,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
  }

  public execute(): string {
    return `import { AppError } fr\om '@shared/errors/AppError';
import { Fake${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { I${this.names.pluralUpperModuleName}Repository } fr\om '@modules/${this.baseNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { Connection, IConnection } fr\om '@shared/typeorm';
import { Show${this.names.upperModuleName}Service } fr\om './Show${this.names.upperModuleName}Service';

let fake${this.names.pluralUpperModuleName}Repository: I${this.names.pluralUpperModuleName}Repository;
let connection: IConnection;
let show${this.names.upperModuleName}Service: Show${this.names.upperModuleName}Service;

describe('Show${this.names.upperModuleName}Service', (): void => {
  beforeAll((): void => {
    connection = new Connection();
    connection.fakeConnect();
  });

  beforeEach((): void => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${this.names.pluralUpperModuleName}Repository();
    show${this.names.upperModuleName}Service = new Show${this.names.upperModuleName}Service(fake${this.names.pluralUpperModuleName}Repository);
  });

  it('Should be able to show a ${this.names.lowerModuleName}', async (): Promise<void> => {
    const ${this.names.lowerModuleName} = await fake${this.names.pluralUpperModuleName}Repository.create({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    const get${this.names.upperModuleName} = await show${this.names.upperModuleName}Service.execute(connection, ${this.names.lowerModuleName}.id);

    expect(get${this.names.upperModuleName}.data).toHaveProperty('id');
    expect(get${this.names.upperModuleName}.data).toEqual(${this.names.lowerModuleName});
  });

  it('Should not be able to show a ${this.names.lowerModuleName} with a non-existing id', async (): Promise<void> => {
    await expect(
      show${this.names.upperModuleName}Service.execute(connection, 'non-existing-${this.names.lowerModuleName}-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
