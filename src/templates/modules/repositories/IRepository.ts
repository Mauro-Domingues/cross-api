import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class CreateIRepository {
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names:
      | Pick<
          IModuleNameDTO,
          'pluralLowerModuleName' | 'pluralUpperModuleName' | 'upperModuleName'
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

    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { IBaseRepository } ${'from'} '@shared/container/modules/repositories/IBaseRepository';

export interface I${
      this.names.pluralUpperModuleName
    }Repository extends IBaseRepository<${this.names.upperModuleName}> {
  // non-generic methods here
}
`;
  }
}
