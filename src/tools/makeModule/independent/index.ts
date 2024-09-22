import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { CustomError } from '@tools/customError';
import { CreateControllers } from '@tools/makeModule/independent/controllers';
import { CreateDtos } from '@tools/makeModule/independent/dtos';
import { CreateEntities } from '@tools/makeModule/independent/entities';
import { CreateInfra } from '@tools/makeModule/independent/infra';
import { CreateModuleInjection } from '@tools/makeModule/independent/injection';
import { CreateRepositories } from '@tools/makeModule/independent/repositories';
import { CreateRoutes } from '@tools/makeModule/independent/routes';
import { CreateServices } from '@tools/makeModule/independent/services';
import { CreateSpecControllers } from '@tools/makeModule/independent/specControllers';
import { CreateSpecServices } from '@tools/makeModule/independent/specServices';
import { Messages } from '@tools/messages';

export class CreateIndependentModule {
  private readonly createSpecControllers: CreateSpecControllers;
  private readonly createModuleInjection: CreateModuleInjection;
  private readonly createSpecServices: CreateSpecServices;
  private readonly createRepositories: CreateRepositories;
  private readonly createControllers: CreateControllers;
  private readonly createEntities: CreateEntities;
  private readonly createServices: CreateServices;
  private readonly createRoutes: CreateRoutes;
  private readonly createInfra: CreateInfra;
  private readonly createDtos: CreateDtos;
  private readonly messages: IMessageDTO;
  private readonly console: Console;
  private readonly concat: Concat;

  public constructor(private readonly names: IModuleNameDTO | undefined) {
    this.messages = Messages.getInstance().execute();

    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    this.createSpecControllers = new CreateSpecControllers(this.names);
    this.createModuleInjection = new CreateModuleInjection(this.names);
    this.createSpecServices = new CreateSpecServices(this.names);
    this.createRepositories = new CreateRepositories(this.names);
    this.createControllers = new CreateControllers(this.names);
    this.createEntities = new CreateEntities(this.names);
    this.createServices = new CreateServices(this.names);
    this.createRoutes = new CreateRoutes(this.names);
    this.createInfra = new CreateInfra(this.names);
    this.createDtos = new CreateDtos(this.names);
    this.console = Console.getInstance();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    this.createInfra.execute();
    this.createDtos.execute();
    this.createEntities.execute();
    this.createRepositories.execute();
    this.createServices.execute();
    this.createControllers.execute();
    this.createSpecServices.execute();
    this.createSpecControllers.execute();
    this.createRoutes.execute();
    this.createModuleInjection.execute();
    return this.console.execute({
      message: [
        '- ',
        this.concat.execute(
          (this.names as Pick<IModuleNameDTO, 'lowerModuleName'>)
            .lowerModuleName,
          'Module',
        ),
        ' ',
        this.messages.comands.description.created,
      ],
      color: 'yellow',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }
}
