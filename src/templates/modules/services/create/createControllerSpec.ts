import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateSpecController {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<
          IModuleNamesDTO,
          'lowerModuleName' | 'upperModuleName' | 'routeModuleName'
        >
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public execute(): string {
    if (!this.names) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
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
