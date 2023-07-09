import { Board } from '@tools/board.js';
import { ConfigJson } from '@tools/config.js';
import { ConfigLanguage } from '@tools/languageConfig.js';
import { ListProvider } from '@tools/listProvider.js';
import { CreateApi } from '@tools/makeApi/index.js';
import { CreateModule } from '@tools/makeModule/index.js';
import { CreateProvider } from '@tools/makeProvider/index.js';
import { CreateRegister } from '@tools/lastModification/save.js';
import { DeleteRegister } from '@tools/lastModification/delete.js';
import { GetNames } from '@tools/names.js';
import { Shell } from '@tools/shell.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

class Index {
  private readonly fullComand: Array<string> = process.argv.slice(2);
  private readonly comand: string = process.argv[2];
  private readonly arg: string = process.argv[3];
  private readonly father: string = process.argv[4];
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly getNames: GetNames;
  private readonly shell: Shell;
  private readonly getFatherNames: GetNames;
  private readonly deleteRegister: DeleteRegister;
  private readonly createRegister: CreateRegister;
  private readonly createProvider: CreateProvider;
  private readonly createModule: CreateModule;
  private readonly createApi: CreateApi;
  private readonly listProvider: ListProvider;
  private readonly configLanguage: ConfigLanguage;
  private readonly configJson: ConfigJson;
  private readonly board: Board;

  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.shell = new Shell();
    this.getNames = new GetNames(this.arg);
    this.getFatherNames = new GetNames(this.father);
    this.deleteRegister = new DeleteRegister();
    this.createRegister = new CreateRegister(
      this.fullComand,
      this.arg,
      this.getNames.execute(),
      this.getFatherNames.execute(),
    );
    this.createProvider = new CreateProvider(
      this.arg,
      this.getFatherNames.execute(),
    );
    this.createModule = new CreateModule(
      this.getNames.execute(),
      this.getFatherNames.execute(),
    );
    this.createApi = new CreateApi();
    this.listProvider = new ListProvider();
    this.configLanguage = new ConfigLanguage();
    this.configJson = new ConfigJson();
    this.board = new Board();
  }

  public execute(): void {
    if (this.comand) {
      if (this.comand !== 'revert') {
        this.createRegister.execute();
      }
      switch (this.comand) {
        case 'config':
          this.configJson.execute();
          break;
        case 'comands':
          this.board.execute();
          break;
        case 'language':
          this.configLanguage.execute();
          break;
        case 'list:provider':
          this.listProvider.execute();
          break;
        case 'make:api':
          this.createApi.execute();
          break;
        case 'make:module':
          this.createModule.execute();
          break;
        case 'make:provider':
          this.createProvider.execute();
          break;
        case 'migration:generate':
          this.shell.execute(
            'ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:generate ./src/shared/typeorm/migrations/default',
          );
          break;
        case 'migration:run':
          this.shell.execute(
            'ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:run',
          );
          break;
        case 'revert':
          this.deleteRegister.execute();
          this.createRegister.execute();
          break;
        default:
          this.console.many([
            [this.messages.notFound, 'red', true, true, true],
            [this.messages.try[0], 'blue', true, false, false],
            [this.messages.try[1], 'yellow', true, false, false],
            [this.messages.try[2], 'blue', true, false, true],
          ]);
          break;
      }
    } else {
      this.console.many([
        [this.messages.notFound, 'red', true, true, true],
        [this.messages.try[0], 'blue', true, false, false],
        [this.messages.try[1], 'yellow', true, false, false],
        [this.messages.try[2], 'blue', true, false, true],
      ]);
    }
  }
}

new Index().execute();
