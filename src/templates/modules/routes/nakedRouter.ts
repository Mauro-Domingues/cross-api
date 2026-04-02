import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export class CreateNakedRoute {
  public constructor(
    private readonly names: Pick<IModuleNameDTO, 'lowerModuleName'>,
  ) {}

  public execute(): string {
    return `import { Router } fr\u006Fm 'express';

const ${this.names.lowerModuleName}Router = Router();

export { ${this.names.lowerModuleName}Router };
`;
  }
}
