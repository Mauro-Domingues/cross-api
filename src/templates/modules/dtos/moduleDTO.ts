import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class CreateModuleDTO {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names: Pick<IModuleNameDTO, 'upperModuleName'> | undefined,
  ) {
    this.messages = new Messages().execute();
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

    return `import { ${this.names.upperModuleName} } ${'from'} '../entities/${
      this.names.upperModuleName
    }';

export interface I${this.names.upperModuleName}DTO extends Partial<${
      this.names.upperModuleName
    }> {}
`;
  }
}
