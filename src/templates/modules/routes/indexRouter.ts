import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class CreateIndexRoute {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names: Pick<IModuleNameDTO, 'lowerModuleName'> | undefined,
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

    return `import { ${this.names.lowerModuleName}Router } ${'from'} './${
      this.names.lowerModuleName
    }Router';
routes.use(${this.names.lowerModuleName}Router);
`;
  }
}
