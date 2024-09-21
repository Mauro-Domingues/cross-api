import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateSpecDependentController {
  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'upperModuleName' | 'routeModuleName'
    >,
  ) {}

  public execute(): string {
    return `import request ${'from'} 'supertest';
import { app } ${'from'} '@shared/app';

describe('Create${this.names.upperModuleName}Controller', (): void => {
  it('Should be able to create a new ${
    this.names.lowerModuleName
  }', async (): Promise<void> => {
    const response = await request(app.server).post('/${
      this.names.routeModuleName
    }').send({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    expect(response.status).toBe(201);
    expect(response.body.data).toHaveProperty('id');
  });
});
`;
  }
}
