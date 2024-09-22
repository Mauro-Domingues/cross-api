import { CreateCacheProvider } from '@tools/makeProvider/cache';

export class CreateProviders {
  private readonly createCacheProvider: CreateCacheProvider;

  public constructor() {
    this.createCacheProvider = new CreateCacheProvider(undefined);
  }

  public execute(): void {
    return this.createCacheProvider.execute();
  }
}
