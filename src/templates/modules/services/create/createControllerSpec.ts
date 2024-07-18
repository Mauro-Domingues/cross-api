import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class CreateSpecController {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names:
      | Pick<
          IModuleNameDTO,
          'lowerModuleName' | 'upperModuleName' | 'routeModuleName'
        >
      | undefined,
  ) {
    this.messages = Messages.getInstance().execute();
  }

  public execute(): string {
    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

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
