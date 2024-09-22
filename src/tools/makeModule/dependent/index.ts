import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { CustomError } from '@tools/customError';
import { CreateDependentControllers } from '@tools/makeModule/dependent/controllers';
import { CreateDependentDtos } from '@tools/makeModule/dependent/dtos';
import { CreateDependentEntities } from '@tools/makeModule/dependent/entities';
import { CreateDependentInfra } from '@tools/makeModule/dependent/infra';
import { CreateDependentModuleInjection } from '@tools/makeModule/dependent/injection';
import { CreateDependentRepositories } from '@tools/makeModule/dependent/repositories';
import { CreateDependentRoutes } from '@tools/makeModule/dependent/routes';
import { CreateDependentServices } from '@tools/makeModule/dependent/services';
import { CreateDependentSpecControllers } from '@tools/makeModule/dependent/specControllers';
import { CreateDependentSpecServices } from '@tools/makeModule/dependent/specServices';
import { Messages } from '@tools/messages';

export class CreateDependentModule {
  private readonly createDependentSpecControllers: CreateDependentSpecControllers;
  private readonly createDependentModuleInjection: CreateDependentModuleInjection;
  private readonly createDependentSpecServices: CreateDependentSpecServices;
  private readonly createDependentRepositories: CreateDependentRepositories;
  private readonly createDependentControllers: CreateDependentControllers;
  private readonly createDependentEntities: CreateDependentEntities;
  private readonly createDependentServices: CreateDependentServices;
  private readonly createDependentRoutes: CreateDependentRoutes;
  private readonly createDependentInfra: CreateDependentInfra;
  private readonly createDependentDtos: CreateDependentDtos;
  private readonly messages: IMessageDTO;
  private readonly console: Console;
  private readonly concat: Concat;

  public constructor(
    private readonly names: IModuleNameDTO | undefined,
    private readonly fatherNames: IModuleNameDTO | undefined,
  ) {
    this.messages = Messages.getInstance().execute();

    if (!this.names || !this.fatherNames) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    this.createDependentSpecControllers = new CreateDependentSpecControllers(
      this.names,
      this.fatherNames,
    );
    this.createDependentModuleInjection = new CreateDependentModuleInjection(
      this.names,
      this.fatherNames,
    );
    this.createDependentSpecServices = new CreateDependentSpecServices(
      this.names,
      this.fatherNames,
    );
    this.createDependentRepositories = new CreateDependentRepositories(
      this.names,
      this.fatherNames,
    );
    this.createDependentControllers = new CreateDependentControllers(
      this.names,
      this.fatherNames,
    );
    this.createDependentEntities = new CreateDependentEntities(
      this.names,
      this.fatherNames,
    );
    this.createDependentServices = new CreateDependentServices(
      this.names,
      this.fatherNames,
    );
    this.createDependentRoutes = new CreateDependentRoutes(
      this.names,
      this.fatherNames,
    );
    this.createDependentInfra = new CreateDependentInfra(
      this.names,
      this.fatherNames,
    );
    this.createDependentDtos = new CreateDependentDtos(
      this.names,
      this.fatherNames,
    );
    this.console = Console.getInstance();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    this.createDependentInfra.execute();
    this.createDependentDtos.execute();
    this.createDependentEntities.execute();
    this.createDependentRepositories.execute();
    this.createDependentServices.execute();
    this.createDependentControllers.execute();
    this.createDependentSpecServices.execute();
    this.createDependentSpecControllers.execute();
    this.createDependentRoutes.execute();
    this.createDependentModuleInjection.execute();
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
