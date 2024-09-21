import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
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

  public constructor(private readonly names: IModuleNameDTO) {
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
    return this.createModuleInjection.execute();
  }
}
