import { IHelpDTO } from '@interfaces/IMessageDTO/IHelpDTO';
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
  private readonly helpMessages: IHelpDTO;
  private readonly deleteApi: DeleteApi;

  public constructor() {
    super();
    this.deleteProvider = new DeleteProvider(this.fileManager, this.basePath);
    this.deleteModule = new DeleteModule(this.fileManager, this.basePath);
    this.deleteApi = new DeleteApi(this.fileManager);
    this.helpMessages = Messages.getInstance().help;
  }

  public execute(): void {
    const register = this.fileManager.readFileSync([
      this.basePath,
      'commands',
      'commands.log',
    ]);

    const [command, name, fatherName] = register.split(',');
    const names = new GetNames(name).execute();
    const fatherNames = new GetNames(fatherName).execute();

    switch (command) {
      case 'make:provider':
        return this.deleteProvider.execute({ command, fatherNames, names });
      case 'make:module':
        return this.deleteModule.execute({ command, fatherNames, names });
      case 'make:api':
        return this.deleteApi.execute({ command });
      default:
        throw new CustomError({
          message: this.helpMessages.errors.notReversed,
          color: 'red',
          bold: true,
          breakStart: true,
          breakEnd: true,
        });
    }
  }
}
