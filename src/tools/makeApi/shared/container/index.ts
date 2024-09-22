import { CreateModules } from '@tools/makeApi/shared/container/modules';
import { CreateProviders } from '@tools/makeApi/shared/container/providers';

export class CreateContainer {
  private readonly createProviders: CreateProviders;
  private readonly createModules: CreateModules;

  public constructor() {
    this.createProviders = new CreateProviders();
    this.createModules = new CreateModules();
  }

  public execute(): void {
    this.createModules.execute();
    return this.createProviders.execute();
  }
}
