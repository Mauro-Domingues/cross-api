import { MakeCacheProvider } from '@tools/makeProvider/independent/cache';

export class CreateProviders {
  private readonly makeCacheProvider: MakeCacheProvider;

  public constructor() {
    this.makeCacheProvider = new MakeCacheProvider();
  }

  public execute(): void {
    return this.makeCacheProvider.execute();
  }
}
