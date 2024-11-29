import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';
import { CreateConfig } from '@tools/makeApi/config';
import { CreateDocs } from '@tools/makeApi/docs';
import { CreateDtos } from '@tools/makeApi/dtos';
import { CreateInfra } from '@tools/makeApi/infra';
import { CreateMiddlewares } from '@tools/makeApi/middlewares';
import { CreateRoot } from '@tools/makeApi/root';
import { CreateRoutes } from '@tools/makeApi/routes';
import { CreateShared } from '@tools/makeApi/shared/index';
import { CreateTypes } from '@tools/makeApi/types';
import { CreateUtils } from '@tools/makeApi/utils';
import { Messages } from '@tools/messages';

export class CreateApi {
  private readonly createMiddlewares: CreateMiddlewares;
  private readonly createShared: CreateShared;
  private readonly createRoutes: CreateRoutes;
  private readonly createConfig: CreateConfig;
  private readonly createInfra: CreateInfra;
  private readonly createUtils: CreateUtils;
  private readonly createTypes: CreateTypes;
  private readonly createDocs: CreateDocs;
  private readonly createRoot: CreateRoot;
  private readonly createDtos: CreateDtos;
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor() {
    this.createMiddlewares = new CreateMiddlewares();
    this.messages = Messages.getInstance().execute();
    this.createShared = new CreateShared();
    this.createRoutes = new CreateRoutes();
    this.createConfig = new CreateConfig();
    this.createInfra = new CreateInfra();
    this.createUtils = new CreateUtils();
    this.createTypes = new CreateTypes();
    this.console = Console.getInstance();
    this.createDocs = new CreateDocs();
    this.createRoot = new CreateRoot();
    this.createDtos = new CreateDtos();
  }

  public execute(): void {
    this.createRoot.execute();
    this.createInfra.execute();
    this.createTypes.execute();
    this.createConfig.execute();
    this.createDtos.execute();
    this.createDocs.execute();
    this.createRoutes.execute();
    this.createMiddlewares.execute();
    this.createShared.execute();
    this.createUtils.execute();
    return this.console.execute({
      message: this.messages.comands.description.apiCreated,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }
}
