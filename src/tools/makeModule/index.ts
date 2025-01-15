import { IComandDTO } from '@interfaces/IMessageDTO/IComandDTO';
import { IModuleDTO } from '@interfaces/IMessageDTO/IModuleDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { CustomError } from '@tools/customError';
import { CreateControllers } from '@tools/makeModule/controllers';
import { CreateDtos } from '@tools/makeModule/dtos';
import { CreateEntities } from '@tools/makeModule/entities';
import { CreateInfra } from '@tools/makeModule/infra';
import { CreateModuleInjection } from '@tools/makeModule/injection';
import { CreateMigrations } from '@tools/makeModule/migrations';
import { CreateRepositories } from '@tools/makeModule/repositories';
import { CreateRoutes } from '@tools/makeModule/routes';
import { CreateServices } from '@tools/makeModule/services';
import { CreateSpecControllers } from '@tools/makeModule/specControllers';
import { CreateSpecServices } from '@tools/makeModule/specServices';
import { CreateValidators } from '@tools/makeModule/validators';
import { Messages } from '@tools/messages';

export class CreateModule {
  private readonly createSpecControllers: CreateSpecControllers;
  private readonly createModuleInjection: CreateModuleInjection;
  private readonly createSpecServices: CreateSpecServices;
  private readonly createRepositories: CreateRepositories;
  private readonly createControllers: CreateControllers;
  private readonly createMigrations: CreateMigrations;
  private readonly createValidators: CreateValidators;
  private readonly createEntities: CreateEntities;
  private readonly createServices: CreateServices;
  private readonly comandMessages: IComandDTO;
  private readonly moduleMessages: IModuleDTO;
  private readonly createRoutes: CreateRoutes;
  private readonly createInfra: CreateInfra;
  private readonly createDtos: CreateDtos;
  private readonly messages: Messages;
  private readonly console: Console;
  private readonly concat: Concat;

  public constructor(
    private readonly names: IModuleNameDTO | undefined,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    this.messages = Messages.getInstance();
    this.comandMessages = this.messages.comands;
    this.moduleMessages = this.messages.modules;

    if (!this.names) {
      throw new CustomError({
        message: this.moduleMessages.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    this.createSpecControllers = new CreateSpecControllers(
      this.names,
      this.fatherNames,
    );
    this.createModuleInjection = new CreateModuleInjection(
      this.names,
      this.fatherNames,
    );
    this.createSpecServices = new CreateSpecServices(
      this.names,
      this.fatherNames,
    );
    this.createRepositories = new CreateRepositories(
      this.names,
      this.fatherNames,
    );
    this.createControllers = new CreateControllers(
      this.names,
      this.fatherNames,
    );
    this.createValidators = new CreateValidators(this.names, this.fatherNames);
    this.createEntities = new CreateEntities(this.names, this.fatherNames);
    this.createServices = new CreateServices(this.names, this.fatherNames);
    this.createRoutes = new CreateRoutes(this.names, this.fatherNames);
    this.createInfra = new CreateInfra(this.names, this.fatherNames);
    this.createDtos = new CreateDtos(this.names, this.fatherNames);
    this.createMigrations = new CreateMigrations(this.names);
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
    this.createValidators.execute();
    this.createRoutes.execute();
    this.createMigrations.execute();
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
        this.comandMessages.description.created,
      ],
      color: 'yellow',
      bold: true,
    });
  }
}
