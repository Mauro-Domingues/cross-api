import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

export class CreateIRepository {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<
          IModuleNamesDTO,
          'pluralLowerModuleName' | 'pluralUpperModuleName' | 'upperModuleName'
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

    return `import { ${this.names.upperModuleName} } ${'from'} '@modules/${
      this.names.pluralLowerModuleName
    }/entities/${this.names.upperModuleName}';
import { IBaseRepositoryDTO } ${'from'} '@shared/container/modules/repositories/IBaseRepository';

export interface I${
      this.names.pluralUpperModuleName
    }RepositoryDTO extends IBaseRepositoryDTO<${this.names.upperModuleName}> {
  // non-generic methods here
}
`;
  }
}
