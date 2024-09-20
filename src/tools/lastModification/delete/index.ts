import { IMessageDTO } from '@interfaces/IMessageDTO';
import { CustomError } from '@tools/customError';
import { BaseRegister } from '@tools/lastModification/base';
import { DeleteApi } from '@tools/lastModification/delete/api';
import { DeleteModule } from '@tools/lastModification/delete/module';
import { DeleteProvider } from '@tools/lastModification/delete/provider';
import { Messages } from '@tools/messages';
import { GetNames } from '@tools/names';

export class DeleteRegister extends BaseRegister {
  private readonly deleteProvider: DeleteProvider;
  private readonly deleteModule: DeleteModule;
  private readonly messages: IMessageDTO;
  private readonly deleteApi: DeleteApi;

  public constructor() {
    super();
    this.deleteProvider = new DeleteProvider(this.fileManager, this.basePath);
    this.deleteModule = new DeleteModule(this.fileManager, this.basePath);
    this.deleteApi = new DeleteApi(this.fileManager);
    this.messages = Messages.getInstance().execute();
  }

  public execute(): void {
    const register = this.fileManager.readFileSync([
      this.basePath,
      'comands',
      'comands.log',
    ]);

    const [comand, name, fatherName] = register.split(',');
    const names = new GetNames(name).execute();
    const fatherNames = new GetNames(fatherName).execute();

    switch (comand) {
      case 'make:provider':
        return this.deleteProvider.execute({ comand, fatherNames, names });
      case 'make:module':
        return this.deleteModule.execute({ comand, fatherNames, names });
      case 'make:api':
        return this.deleteApi.execute({ comand });
      default:
        throw new CustomError({
          message: this.messages.comands.errors.notReversed,
          color: 'red',
          bold: true,
          breakStart: true,
          breakEnd: true,
        });
    }
  }
}
