import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class CreateIndexDependentRoute {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'lowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    if (!this.fatherNames) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return `import { ${this.fatherNames.lowerModuleName}Router } ${'from'} './${
      this.fatherNames.lowerModuleName
    }Router';
routes.use(${this.fatherNames.lowerModuleName}Router);
`;
  }
}
